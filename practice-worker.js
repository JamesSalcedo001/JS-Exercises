// Practice runs away from the page so a mistaken infinite loop is stoppable.
const equal = (left, right) => {
  if (left === right) return true;
  if (typeof left !== typeof right || left === null || right === null) return false;
  if (Array.isArray(left) || Array.isArray(right)) {
    return Array.isArray(left) && Array.isArray(right) && left.length === right.length && left.every((value, i) => equal(value, right[i]));
  }
  if (typeof left !== "object") return false;
  const keys = Object.keys(left);
  return keys.length === Object.keys(right).length && keys.every((key) => Object.prototype.hasOwnProperty.call(right, key) && equal(left[key], right[key]));
};
self.onmessage = async ({ data: { language, code, tests, functionName, preserveInput } }) => {
  let output = "";
  const append = (text) => {
    if (output.length + text.length > 20000) throw new Error("Too much output. Try a smaller loop.");
    output += text;
  };
  try {
    let pythonModule;
    let jsFunction;
    if (language === "python") {
      importScripts("./vendor/skulpt/skulpt.min.js", "./vendor/skulpt/skulpt-stdlib.js");
      Sk.configure({
        output: append,
        read(name) {
          const file = Sk.builtinFiles.files[name];
          if (file === undefined) throw new Error("This browser Python activity does not include: " + name);
          return file;
        },
        __future__: Sk.python3, execLimit: 4000,
        inputfun() { throw new Error("Use variables instead of input() in these activities."); },
      });
      pythonModule = await Sk.misceval.asyncToPromise(() => Sk.importMainWithBody("<practice>", false, code, true));
    } else {
      console.log = (...args) => append(args.map((value) =>
        typeof value === "object" && value !== null ? JSON.stringify(value) : String(value)
      ).join(" ") + "\n");
      // A personal coding playground, not a security sandbox for untrusted code.
      if (tests) {
        if (!/^[a-zA-Z_][a-zA-Z0-9_]*$/.test(functionName)) throw new Error("Invalid function name");
        jsFunction = new Function(code + `\nreturn typeof ${functionName} === 'function' ? ${functionName} : null;`)();
      } else (0, eval)(code);
    }
    if (!tests) { self.postMessage({ output }); return; }
    const pythonFunction = pythonModule?.$d[functionName];
    if (language === "python" ? !pythonFunction : !jsFunction) {
      throw new Error(`Define ${functionName} with the requested parameters, and return the result instead of only printing it.`);
    }
    const results = [];
    for (const test of tests) {
      const args = JSON.parse(JSON.stringify(test.args));
      let actual;
      let error;
      try {
        if (language === "python") {
          const pythonArgs = args.map((arg) => Sk.ffi.remapToPy(arg));
          const value = await Sk.misceval.asyncToPromise(() => Sk.misceval.callsimOrSuspendArray(pythonFunction, pythonArgs));
          actual = Sk.ffi.remapToJs(value);
          if (preserveInput && !equal(pythonArgs.map((arg) => Sk.ffi.remapToJs(arg)), test.args)) error = "Input changed. Return a result without modifying the input.";
        } else {
          actual = jsFunction(...args);
          if (preserveInput && !equal(args, test.args)) error = "Input changed. Return a result without modifying the input.";
        }
      } catch (caught) { error = String(caught); }
      results.push({ args: test.args, expected: test.expected, actual, error, passed: !error && equal(actual, test.expected) });
    }
    self.postMessage({ output, results });
  } catch (error) { self.postMessage({ output, error: String(error) }); }
};
