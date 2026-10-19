import { formatCode } from "./format-code.js";
// The built-in editor is always available, including on a cold offline reload.
// Monaco starts automatically on desktop. Touch devices use the lighter editor.
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
  textarea.addEventListener('beforeinput', event => {
    if (event.isComposing) return;
    const start=textarea.selectionStart, end=textarea.selectionEnd, char=event.data;
    const pairs={'(':')','[':']','{':'}','"':'"',"'":"'"};
    if (event.inputType==='deleteContentBackward' && start===end && start>0 && pairs[textarea.value[start-1]]===textarea.value[start]) {
      event.preventDefault();textarea.setSelectionRange(start-1,start+1);editor.insert('');return;
    }
    if (event.inputType==='insertText' && char?.length===1) {
      if (start===end && ')]}\"\''.includes(char) && textarea.value[start]===char) {
        event.preventDefault();textarea.setSelectionRange(start+1,start+1);return;
      }
      if (pairs[char] && (!'\"\''.includes(char) || !/[\w]/.test(textarea.value[start-1]||''))) {
        event.preventDefault();editor.insertPair(char+pairs[char]);return;
      }
    }
    if (['insertLineBreak','insertParagraph'].includes(event.inputType)) {
      event.preventDefault();const line=textarea.value.slice(0,start).split('\n').at(-1);
      const indent=line.match(/^\s*/)[0]+(/[\[{(]\s*$/.test(line)||(language==='python'&&/:\s*$/.test(line))?'    ':'');
      editor.insert('\n'+indent);
    }
  });
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
  if (touchEditor) status.textContent = "Touch editor · automatic pairs and indentation · extra helpers are optional";
  let loadingMonaco = false;
  editor.enableMonaco = () => {
    if (monacoEditor || loadingMonaco) return;
    loadingMonaco = true;
    const loader = document.createElement("script");
    loader.src = "./vendor/monaco/vs/loader.js";
    loader.onload = () => {
      if (!window.require) return;
      window.require.config({ paths: { vs: new URL('./vendor/monaco/vs', import.meta.url).href } });
      window.require(["vs/editor/editor.main"], () => {
        const value = textarea.value;
        const surface = document.createElement("div");
        surface.style.height = "100%";
        container.appendChild(surface);
        try {
          monacoEditor = window.monaco.editor.create(surface, {
            value, language, theme: "vs-dark", automaticLayout: true,
            formatOnType: true, formatOnPaste: true, minimap: { enabled: false },
            autoClosingBrackets:'always',autoClosingQuotes:'languageDefined',autoIndent:'full',
            wordWrap: "on", lineNumbersMinChars: 2, padding: { top: 10, bottom: 10 },
            renderLineHighlight: "none", fontSize: 14,
          });
          textarea.hidden = true;
          monacoEditor.onDidChangeModelContent(() => onChange(monacoEditor.getValue()));
          status.textContent = "Monaco editor · available offline · Shift+Alt+F formats code";
          for (const id of ['javascript','html','python']) window.monaco.languages.registerDocumentFormattingEditProvider(id, {
            async provideDocumentFormattingEdits(model) { return [{ range:model.getFullModelRange(), text:await formatCode(model.getValue(),id) }]; }
          });
        } catch (error) {
          monacoEditor?.dispose(); monacoEditor = undefined; textarea.hidden = false; loadingMonaco = false;
          status.textContent = 'Could not enable Monaco. The built-in editor remains available. ' + error.message;
          surface.remove();
          // Keep the usable built-in editor if optional Monaco initialization fails.
        }
      }, () => {});
    };
    loader.onerror = () => { loadingMonaco = false; status.textContent = "Monaco could not load. The built-in editor and Format code still work."; };
    document.head.appendChild(loader);
  };
  let revision=0, running=false;
  editor.cancelAutoFormat=()=>{ revision++; };
  editor.setBusy=value=>{ running=value; };
  const originalSet=editor.setValue;
  editor.setValue=value=>{ revision++; originalSet(value); };
  const autoFormat=()=>{
    const before=editor.getValue(), currentLanguage=language, currentRevision=revision;
    setTimeout(async()=>{
    if(running || revision!==currentRevision)return;
    if (document.activeElement?.closest('button') || container.contains(document.activeElement)) return;
    if(!before.trim() || /^(?:\/\/[^\n]*|#[^\n]*)$/.test(before.trim()))return;
    try { const formatted=await formatCode(before,currentLanguage);
      if(running || revision!==currentRevision || language!==currentLanguage || editor.getValue()!==before || container.contains(document.activeElement) || formatted===before)return;
      if(monacoEditor) { monacoEditor.pushUndoStop();monacoEditor.executeEdits('format',[{range:monacoEditor.getModel().getFullModelRange(),text:formatted}]);monacoEditor.pushUndoStop(); }
      else { remember();textarea.value=formatted;onChange(formatted); }
    } catch { /* Incomplete code is normal while practicing; leave it alone. */ }
  },0); };
  container.addEventListener('focusout',autoFormat);
  let plain=false;
  try { plain=localStorage.getItem('daily-practice-editor')==='plain'; } catch {}
  if(!touchEditor && !plain) editor.enableMonaco();
  return editor;
}
