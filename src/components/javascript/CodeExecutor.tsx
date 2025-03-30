"use client";

import { Play } from "lucide-react";
import { useState, useEffect } from "react";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import Editor from "react-simple-code-editor";
// import { highlight, languages } from "prismjs/components/prism-core";

interface Props {
  code?: string;
}
const CodeExecutor: React.FC<Props> = ({ code: initialCode }) => {
  const [code, setCode] = useState(initialCode || "");
  const [output, setOutput] = useState("");
  const [worker, setWorker] = useState<Worker | null>(null);

  useEffect(() => {
    const newWorker = new Worker(new URL("./worker.js", import.meta.url));
    newWorker.onmessage = (event) => {
      const { output } = event.data;
      setOutput(output);
    };
    setWorker(newWorker);

    return () => newWorker.terminate();
  }, []);

  const executeCode = () => {
    if (worker) {
      setOutput("Executing...");
      worker.postMessage(code);
    }
  };

  return (
    <div className="">
      <Editor
        value={code}
        onValueChange={(codes) => setCode(codes)}
        highlight={(codes) => highlight(codes, languages.js, "js")}
        padding={10}
        style={{
          fontSize: 16,
        }}
      />
      {/* <button
        className="mt-2 rounded bg-blue-500 px-4 py-2 text-white"
        onClick={executeCode}
      >
        <Play className="mr-2" size={20} />
        Run Code
      </button> */}

      <button
        onClick={executeCode}
        disabled={!code}
        className={`my-3.5 flex !flex-row items-center justify-center rounded-md bg-green-500 px-4 py-2 text-white shadow-md transition-all duration-300 hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none ${
          !code
            ? "cursor-not-allowed opacity-50"
            : "cursor-pointer hover:scale-105"
        } `}
      >
        <Play className="mr-2 inline-block" size={20} />
        <span className="font-semibold">Run</span>
      </button>
      <pre className="mt-2 rounded bg-slate-800 p-2 text-white">
        {"// Output: "}
        <br />
        {output}
      </pre>
    </div>
  );
};

export default CodeExecutor;
