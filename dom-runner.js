// Student DOM code executes in an opaque-origin frame, separate from the app.
function frameRuntime() {
  const send = data => parent.postMessage(data, '*');
  addEventListener('message', async ({ data }) => {
    if (!data || data.kind !== 'practice-dom') return;
    let output = '';
    console.log = (...args) => { output += args.map(String).join(' ') + '\n'; };
    try {
      const setup = new Function(data.code + '\nreturn typeof setupDOM === "function" ? setupDOM : null;')();
      if (!setup) throw Error('Define setupDOM with the requested parameters.');
      const results = [];
      const cases = data.check ? data.exercise.tests : [data.exercise.tests[0]];
      for (const test of cases) {
        document.body.innerHTML = data.exercise.fixture;
        await setup(...structuredClone(test.args));
        let prevented = true;
        if (data.check) for (const action of test.actions) {
          if (action.type === 'submit' || action.type === 'input') document.querySelector('#task-title').value = action.value;
          if (action.type === 'submit') prevented = !document.querySelector('#task-form').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true })) && prevented;
          if (action.type === 'click') {
            const target = document.querySelectorAll(action.selector)[action.index];
            if (!target) throw Error('Missing click target: ' + action.selector);
            target.click();
          }
        }
        const snapshot = {
          heading: document.querySelector('#heading')?.textContent,
          titles: [...document.querySelectorAll('#tasks li')].map(li => li.textContent),
          labels: [...document.querySelectorAll('#tasks li span')].map(span => span.textContent),
          buttons: [...document.querySelectorAll('#tasks li button')].map(button => button.textContent),
          done: [...document.querySelectorAll('#tasks li')].map(li => li.classList.contains('done')),
          input: document.querySelector('#task-title')?.value,
          count: document.querySelector('#count')?.textContent,
          markup: Boolean(document.querySelector('#tasks b')),
          prevented,
        };
        const actual = Object.fromEntries(Object.keys(test.expected).map(key => [key, snapshot[key]]));
        results.push({args:test.args, expected:test.expected, actual, passed:JSON.stringify(actual) === JSON.stringify(test.expected)});
      }
      send({ token:data.token, output, results:data.check ? results : undefined });
    } catch (error) { send({token:data.token, output, error:String(error)}); }
  });
  send({ready:true});
}
export function runDOM(code, exercise, check, container, onBusy, setActive) {
  return new Promise(resolve => {
    const frame = document.createElement('iframe');
    frame.title = 'Your practice page';
    frame.setAttribute('sandbox', 'allow-scripts allow-forms');
    frame.style.cssText = 'width:100%;height:240px;border:0;background:white;color:black';
    const token = crypto.randomUUID();
    let finished = false;
    const finish = result => {
      if (finished) return;
      finished = true; clearTimeout(timer); removeEventListener('message', receive);
      setActive(null); onBusy(false);
      if (!result || result.error) frame.remove();
      resolve(result);
    };
    const receive = event => {
      if (event.source !== frame.contentWindow) return;
      if (event.data?.ready) frame.contentWindow.postMessage({kind:'practice-dom',token,code,exercise,check}, '*');
      else if (event.data?.token === token) finish(event.data);
    };
    const timer = setTimeout(() => finish({error:'The page took too long. Check your code and try again.'}), 5000);
    addEventListener('message', receive);
    setActive({finish}); onBusy(true);
    frame.srcdoc = '<!doctype html><html><head><meta http-equiv="Content-Security-Policy" content="default-src \'none\'; script-src \'unsafe-inline\' \'unsafe-eval\'; style-src \'unsafe-inline\'; form-action \'none\'"><style>body{font:16px system-ui;padding:12px}li{margin:8px 0}.done span,.done{color:#777;text-decoration:line-through}button{margin-left:8px}</style></head><body><script>(' + frameRuntime.toString() + ')()<\/script></body></html>';
    container.replaceChildren(frame);
  });
}
