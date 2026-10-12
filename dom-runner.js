// Student DOM code executes in an opaque-origin frame, separate from the app.
function frameRuntime() {
  const send = data => parent.postMessage(data, '*');
  addEventListener('message', async ({ data }) => {
    if (!data || data.kind !== 'practice-dom') return;
    let output = '';
    console.log = (...args) => { output += args.map(String).join(' ') + '\n'; };
    try {
      const setup = data.exercise.html ? null : new Function(data.code + '\nreturn typeof setupDOM === "function" ? setupDOM : null;')();
      if (!data.exercise.html && !setup) throw Error('Define setupDOM with the requested parameters.');
      const results = [];
      const cases = data.check ? data.exercise.tests : [data.exercise.tests[0]];
      for (const test of cases) {
        if (data.check && test.width) {
          await new Promise(resolve => {
            const resized = event => { if (event.source === parent && event.data?.kind === 'practice-resized' && event.data.token === data.token) { removeEventListener('message', resized); resolve(); } };
            addEventListener('message', resized);
            send({token:data.token, resize:test.width});
          });
        }
        const saved = {...(test.storage || {})};
        self.practiceStorage = {getItem: key => saved[key] ?? null, setItem: (key, value) => { saved[key] = String(value); }, removeItem: key => { delete saved[key]; }};
        const mount = async () => { document.body.innerHTML = data.exercise.html ? data.code : data.exercise.fixture; if (setup) await setup(...structuredClone(test.args)); };
        await mount();
        let prevented = true;
        if (data.check) for (const action of test.actions) {
          if (action.type === 'submit' || action.type === 'input') document.querySelector(action.selector || '#task-title').value = action.value;
          if (action.type === 'submit') prevented = !document.querySelector(action.selector || '#task-form').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true })) && prevented;
          if (action.type === 'reload') await mount();
          if (action.type === 'change') { const input = document.querySelector(action.selector); input.checked = action.checked; input.dispatchEvent(new Event('change', {bubbles:true})); }
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
        const sourceDocument = data.exercise.html ? new DOMParser().parseFromString(data.code, "text/html") : null;
        const inspect = assertion => {
          const elements = [...document.querySelectorAll(assertion.selector || 'body')];
          const first = elements[0];
          const boxes = elements.map(el => el.getBoundingClientRect());
          switch (assertion.kind) {
            case 'doctype': return sourceDocument?.doctype?.name.toLowerCase() === 'html';
            case 'sourceNonempty': return Boolean(sourceDocument?.querySelector(assertion.selector)?.textContent.trim());
            case 'sourceExists': return Boolean(sourceDocument?.querySelector(assertion.selector));
            case 'sourceAttribute': return sourceDocument?.querySelector(assertion.selector)?.getAttribute(assertion.attribute)?.toLowerCase() === assertion.value.toLowerCase();
            case 'exists': return Boolean(first);
            case 'absent': return elements.length === 0;
            case 'count': return elements.length === assertion.value;
            case 'nonempty': return Boolean(first?.textContent.trim());
            case 'allNonempty': return elements.length > 0 && elements.every(el => el.textContent.trim());
            case 'text': return first?.textContent === assertion.value;
            case 'texts': return JSON.stringify(elements.map(el => el.textContent)) === JSON.stringify(assertion.value);
            case 'checked': return first?.checked === assertion.value;
            case 'attribute': return first?.getAttribute(assertion.attribute) === assertion.value;
            case 'computedMin': return Boolean(first) && parseFloat(getComputedStyle(first)[assertion.property]) >= assertion.value;
            case 'attributePrefix': return Boolean(first?.getAttribute(assertion.attribute)?.startsWith(assertion.value));
            case 'noOverflow': return document.documentElement.scrollWidth <= innerWidth;
            case 'sideBySide': return boxes.length >= 2 && boxes.slice(0,2).every(box => box.width > 0 && box.height > 0) && Math.abs(boxes[0].top - boxes[1].top) < 2 && boxes[1].left >= boxes[0].right;
            case 'stacked': return boxes.length >= 2 && boxes.slice(0,2).every(box => box.width > 0 && box.height > 0) && boxes[1].top >= boxes[0].bottom && Math.abs(boxes[0].left - boxes[1].left) < 2;
            default: throw Error('Unknown page check: ' + assertion.kind);
          }
        };
        const actual = test.assertions ? Object.fromEntries(test.assertions.map(assertion => [assertion.label, Boolean(inspect(assertion))])) : Object.fromEntries(Object.keys(test.expected).map(key => [key, snapshot[key]]));
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
    if (exercise.html) frame.style.height = '420px';
    const token = crypto.randomUUID();
    let finished = false;
    const finish = result => {
      if (finished) return;
      finished = true; clearTimeout(timer); removeEventListener('message', receive);
      setActive(null); onBusy(false); frame.style.width = '100%';
      if (!result || result.error) frame.remove();
      resolve(result);
    };
    const receive = event => {
      if (event.source !== frame.contentWindow) return;
      if (event.data?.ready) frame.contentWindow.postMessage({kind:'practice-dom',token,code,exercise,check}, '*');
      else if (event.data?.token === token && event.data.resize) { frame.style.width = Math.max(240, Math.min(900, event.data.resize)) + 'px'; frame.getBoundingClientRect(); frame.contentWindow.postMessage({kind:'practice-resized', token}, '*'); }
      else if (event.data?.token === token) finish(event.data);
    };
    const timer = setTimeout(() => finish({error:'The page took too long. Check your code and try again.'}), 5000);
    addEventListener('message', receive);
    setActive({finish}); onBusy(true);
    frame.srcdoc = '<!doctype html><html><head><meta http-equiv="Content-Security-Policy" content="default-src \'none\'; script-src \'unsafe-inline\' \'unsafe-eval\'; style-src \'unsafe-inline\'; form-action \'none\'"><style>body{font:16px system-ui;padding:12px}li{margin:8px 0}.done span,.done{color:#777;text-decoration:line-through}button{margin-left:8px}</style></head><body><script>(' + frameRuntime.toString() + ')()<\/script></body></html>';
    container.replaceChildren(frame);
  });
}
