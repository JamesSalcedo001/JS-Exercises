// The built-in editor is always available, including on a cold offline reload.
// Monaco is an optional online enhancement, never a prerequisite for practice.
export function createEditor(container, onChange) {
  const textarea = document.createElement("textarea");
  textarea.id = "offline-editor";
  textarea.setAttribute("aria-label", "Code editor");
  textarea.spellcheck = false;
  textarea.autocapitalize = "off";
  textarea.autocomplete = "off";
  container.appendChild(textarea);
  let monacoEditor;
  let language = "javascript";
  const status = document.getElementById("editor-status");
  status.textContent = "Built-in editor · works offline · Tab indents your code";
  textarea.addEventListener("input", () => onChange(textarea.value));
  textarea.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;
    event.preventDefault();
    textarea.setRangeText("    ", textarea.selectionStart, textarea.selectionEnd, "end");
    onChange(textarea.value);
  });
  const editor = {
    getValue: () => monacoEditor ? monacoEditor.getValue() : textarea.value,
    setValue(value) { if (monacoEditor) monacoEditor.setValue(value); else textarea.value = value; },
    setLanguage(value) {
      language = value;
      if (monacoEditor) window.monaco.editor.setModelLanguage(monacoEditor.getModel(), value);
    },
    focus() { (monacoEditor || textarea).focus(); },
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
  if (navigator.onLine) {
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
