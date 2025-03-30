self.onmessage = function (event) {
  try {
    const code = event.data;
    let result = "";

    // Capture console.log output
    // const originalConsoleLog = console.log;
    console.log = (...args) => {
      result += args.join(" ") + "\n";
    };

    // Execute the code
    const evalResult = eval(code);
    if (evalResult !== undefined) {
      result += evalResult + "\n";
    }

    // Send result back to the main thread
    self.postMessage({ success: true, output: result });
  } catch (error) {
    self.postMessage({ success: false, output: "Error: " + error.message });
  }
};
