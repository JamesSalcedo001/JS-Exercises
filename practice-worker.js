// Flight activities run away from the page so a mistaken infinite loop is stoppable.
self.onmessage = async ({ data: { language, code } }) => {
  let output = "";
  const append = (text) => {
    if (output.length + text.length > 20000) throw new Error("Too much output. Try a smaller loop.");
    output += text;
  };
  try {
    if (language === "python") {
      importScripts("./vendor/skulpt/skulpt.min.js", "./vendor/skulpt/skulpt-stdlib.js");
      Sk.configure({
        output: append,
        read(name) {
          const file = Sk.builtinFiles.files[name];
          if (file === undefined) throw new Error("This browser Python activity does not include: " + name);
          return file;
        },
        __future__: Sk.python3,
        execLimit: 4000,
        inputfun() { throw new Error("Use variables instead of input() in these activities."); },
      });
      await Sk.misceval.asyncToPromise(() => Sk.importMainWithBody("<practice>", false, code, true));
    } else {
      console.log = (...args) => append(args.map((value) =>
        typeof value === "object" && value !== null ? JSON.stringify(value) : String(value)
      ).join(" ") + "\n");
      // This is a coding playground, not a security sandbox for untrusted code.
      (0, eval)(code);
    }
    self.postMessage({ output });
  } catch (error) {
    self.postMessage({ output, error: String(error) });
  }
};
