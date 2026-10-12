// The built-in editor is always available, including on a cold offline reload.
// Monaco is an optional online enhancement, never a prerequisite for practice.
export function createEditor(container, onChange) {
  const textarea = document.createElement("textarea");
  textarea.id = "offline-editor";
  textarea.setAttribute("aria-label", "Code editor");
  textarea.spellcheck = false;
  textarea.autocapitalize = "off";
  textarea.autocomplete = "off";
  textarea.setAttribute("autocorrect", "off");
  textarea.setAttribute("enterkeyhint", "enter");
  container.appendChild(textarea);
  const history = [];
  const remember = () => { history.push({value:textarea.value, start:textarea.selectionStart, end:textarea.selectionEnd}); if (history.length > 50) history.shift(); };
  textarea.addEventListener("beforeinput", event => { if (!event.inputType?.startsWith("history")) remember(); });
  let monacoEditor;
  let language = "javascript";
  const status = document.getElementById("editor-status");
  status.textContent = "Built-in editor · works offline · Tab indents your code";
  textarea.addEventListener("input", () => onChange(textarea.value));
  textarea.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    event.preventDefault();
    editor.indent();
  });
  const editor = {
    getValue: () => monacoEditor ? monacoEditor.getValue() : textarea.value,
    setValue(value) { history.length = 0; if (monacoEditor) monacoEditor.setValue(value); else textarea.value = value; },
    setLanguage(value) {
      language = value;
      if (monacoEditor) window.monaco.editor.setModelLanguage(monacoEditor.getModel(), value);
    },
    focus() { if (monacoEditor) monacoEditor.focus(); else textarea.focus({preventScroll:true}); },
    blur() { textarea.blur(); if (monacoEditor) container.querySelector('textarea')?.blur(); },
    insert(text) {
      if (typeof text !== 'string') return;
      if (monacoEditor) { monacoEditor.executeEdits('touch', [{range:monacoEditor.getSelection(), text, forceMoveMarkers:true}]); monacoEditor.focus(); }
      else { remember(); textarea.setRangeText(text, textarea.selectionStart, textarea.selectionEnd, 'end'); textarea.focus({preventScroll:true}); onChange(textarea.value); }
    },
    indent() {
      if (monacoEditor) { monacoEditor.trigger('touch', 'editor.action.indentLines'); monacoEditor.focus(); }
      else { const selected = textarea.value.slice(textarea.selectionStart, textarea.selectionEnd); editor.insert('    ' + selected.replace(/\n/g, '\n    ')); }
    },
    insertPair(pair) {
      if (monacoEditor) {
        const selected = monacoEditor.getModel().getValueInRange(monacoEditor.getSelection());
        editor.insert(pair[0] + selected + pair[1]);
        editor.move(-1);
      } else {
        const start = textarea.selectionStart, end = textarea.selectionEnd;
        remember(); textarea.setRangeText(pair[0] + textarea.value.slice(start, end) + pair[1], start, end, 'end');
        textarea.setSelectionRange(start + 1, end + 1); textarea.focus({preventScroll:true}); onChange(textarea.value);
      }
    },
    undo() {
      if (monacoEditor) { monacoEditor.trigger('touch', 'undo'); monacoEditor.focus(); }
      else { const saved = history.pop(); if (!saved) return; textarea.value = saved.value; textarea.setSelectionRange(saved.start, saved.end); textarea.focus({preventScroll:true}); onChange(textarea.value); }
    },
    move(direction) {
      if (monacoEditor) {
        const pos = monacoEditor.getPosition();
        const model = monacoEditor.getModel();
        const offset = Math.max(0, Math.min(model.getValueLength(), model.getOffsetAt(pos) + direction));
        monacoEditor.setPosition(model.getPositionAt(offset));
        monacoEditor.focus();
      } else {
        const pos = Math.max(0, Math.min(textarea.value.length, textarea.selectionStart + direction));
        textarea.focus();
        textarea.setSelectionRange(pos, pos);
      }
    },
  };
  const touchEditor = matchMedia("(pointer: coarse)").matches || matchMedia("(max-width: 640px)").matches;
  if (touchEditor) status.textContent = "Touch editor · use Indent and Symbols above your code";
  if (navigator.onLine && !touchEditor) {
    const loader = document.createElement("script");
    loader.src = "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs/loader.js";
    loader.onload = () => {
      if (!window.require) return;
      window.require.config({ paths: { vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs" } });
      window.require(["vs/editor/editor.main"], () => {
        const value = textarea.value;
        const surface = document.createElement("div");
        surface.style.height = "100%";
        container.appendChild(surface);
        try {
          monacoEditor = window.monaco.editor.create(surface, {
            value, language, theme: "vs-dark", automaticLayout: true,
            formatOnType: true, formatOnPaste: true, minimap: { enabled: false },
            wordWrap: "on", lineNumbersMinChars: 2, padding: { top: 10, bottom: 10 },
            renderLineHighlight: "none", fontSize: 14,
          });
          textarea.hidden = true;
          monacoEditor.onDidChangeModelContent(() => onChange(monacoEditor.getValue()));
          status.textContent = "Monaco editor · offline reloads use the built-in editor";
        } catch {
          surface.remove();
          // Keep the usable built-in editor if optional Monaco initialization fails.
        }
      }, () => {});
    };
    document.head.appendChild(loader);
  }
  return editor;
}
