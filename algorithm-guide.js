export function mountAlgorithmGuide(root, language) {
  root.innerHTML = `<p class="muted">Start with a tiny input. Trace it first, count the work second, name the growth last.</p>
    <details><summary>1 · Follow one line at a time</summary><p>Input: [2, 4, 1]. We want its sum. Before pressing Next, predict the new total.</p><pre id="trace-code"></pre>
    <div class="trace-scroll" tabindex="0" aria-label="Running total trace"><table class="tool-table"><thead><tr><th>Action</th><th>Number</th><th>Total before</th><th>Total after</th></tr></thead><tbody id="trace-rows"></tbody></table></div>
    <p id="trace-status" role="status" aria-live="polite"></p><div class="home-actions"><button id="trace-next" type="button">Next step</button><button id="trace-reset" type="button">Start over</button></div><p class="muted">This traces the example above, not your editor code. For your own code, write the same columns on paper or in your plan.</p></details>
    <details><summary>2 · What does n mean? What is Big O?</summary><p>n is the size of the input: often the number of list items or text characters. If you have two independent inputs, name their sizes n and m.</p><p>Time complexity describes how work grows as input grows. It is not a stopwatch reading. Big O gives an upper growth bound; in these lessons we use the tight, useful bound for the stated case.</p><p>A loop doing n visits plus three setup steps has n + 3 work units in a simple model. Its linear term dominates as n grows, so we say O(n). Two separate n-item loops are 2n, also O(n).</p></details>
    <details><summary>3 · Compare growth with real counts</summary><label for="growth-size">Input size n</label><select id="growth-size"><option>4</option><option>8</option><option>16</option><option>32</option><option>64</option></select><div id="growth-counts" role="status" aria-live="polite"></div><p class="muted">These are counts in four specific example algorithms, not measured runtimes. Halving counts divisions until 1; binary search has its own comparisons and boundary checks.</p><p>O(1): fixed work. O(log n): repeatedly halve what remains. O(n): visit every item once. O(n²): visit every item for every item. O(n log n), often seen in efficient comparison sorting, grows between n and n². A sort's cost depends on its algorithm and implementation.</p></details>
    <details><summary>4 · Space means stored data</summary><p>A total, counter, and current number use a fixed number of slots: O(1) extra space. A new list with n entries uses O(n) space. The loop itself does not tell you the memory cost.</p><p>Input space already exists. Output space is the result you return. Auxiliary space is temporary working memory, excluding that output. Say which one you are counting. A doubled result list has O(n) output space but can use O(1) auxiliary space.</p><p>Track the most memory alive at once, not every allocation over time. A stack or dictionary may grow to n entries. A fixed alphabet of 26 letters stays bounded. Recursive calls also take stack space; we will study recursion later.</p></details>
    <details><summary>5 · Avoid these common mix-ups</summary><ul class="short-list"><li>Two loops one after another: add their work. An n-turn loop inside an n-turn loop: multiply. An inner loop with a fixed three turns still gives O(n) total work.</li><li>Best case and worst case differ. A first-item match needs one comparison; a missing item may need n. State which case you mean.</li><li>A short method call can hide a loop. map and filter scan the list and create a result; chaining them still takes O(n) time for a fixed number of passes, with O(n) intermediate storage in the worst case.</li><li>Dictionary and set lookups are usually analyzed as expected O(1); that is an assumption, not a guarantee for every lookup.</li><li>Passing tests proves the tested results, not your complexity. Read your actual loops, copies, method calls, and stored data.</li></ul></details>
    <details><summary>6 · Try explaining it yourself</summary><p>Two separate full-list loops share one counter and make no new lists. Is their time O(n) or O(n²)?</p><div class="home-actions"><button data-cost="linear" type="button">O(n)</button><button data-cost="quadratic" type="button">O(n²)</button></div><p id="cost-feedback" role="status"></p><p>Use this sentence: “n is ___. I do ___ visits. The worst-case time is ___ because ___. I keep ___ extra values, so space is ___.”</p></details>`;
  root.querySelector('#trace-code').textContent = language === 'python'
    ? 'def add_example():\n    total = 0\n    for number in [2, 4, 1]:\n        total += number\n    return total'
    : 'function addExample() {\n  let total = 0;\n  for (const number of [2, 4, 1]) {\n    total += number;\n  }\n  return total;\n}';
  const rows = [['Start', '—', '—', 0], ['Add first', 2, 0, 2], ['Add second', 4, 2, 6], ['Add third', 1, 6, 7], ['Return', '—', 7, 7]];
  let step = 0;
  function renderTrace() {
    root.querySelector('#trace-rows').replaceChildren(...rows.slice(0, step + 1).map(row => {
      const tr = document.createElement('tr');
      for (const value of row) { const td = document.createElement('td'); td.textContent = value; tr.append(td); }
      return tr;
    }));
    root.querySelector('#trace-status').textContent = step === 4 ? 'Done: return 7. Three additions; the return does not add again.' : `Step ${step} of 4. Predict what happens next.`;
    root.querySelector('#trace-next').disabled = step === 4;
  }
  root.querySelector('#trace-next').onclick = () => { step++; renderTrace(); };
  root.querySelector('#trace-reset').onclick = () => { step = 0; renderTrace(); };
  function renderGrowth() {
    const n = Number(root.querySelector('#growth-size').value);
    const list = document.createElement('ul'); list.className = 'short-list';
    for (const text of [`Read first entry: 1 read → O(1)`, `Halve ${n} down to 1: ${Math.log2(n)} divisions → O(log n)`, `Walk once: ${n} visits → O(n)`, `Walk inside every turn: ${n * n} inner visits → O(n²)`]) {
      const li = document.createElement('li'); li.textContent = text; list.append(li);
    }
    root.querySelector('#growth-counts').replaceChildren(list);
  }
  root.querySelector('#growth-size').onchange = renderGrowth;
  for (const button of root.querySelectorAll('[data-cost]')) button.onclick = () => {
    root.querySelector('#cost-feedback').textContent = button.dataset.cost === 'linear'
      ? 'Yes. n + n = 2n, which simplifies to O(n). One counter means O(1) extra space.'
      : 'Walk through n = 3: the first loop visits 3 items, then the second visits 3. That is 6, not 9. Add separate passes; multiply full nested passes.';
  };
  renderTrace(); renderGrowth();
}
