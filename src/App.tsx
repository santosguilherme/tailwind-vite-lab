import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col items-center gap-4">
      <h1 className="mt-4 text-3xl font-bold text-violet-600">Hello world!</h1>
      <div className="flex items-center gap-4">
        <span className="font-medium text-violet-500">Count: {count} </span>
        <button
          className="rounded bg-violet-500 p-2 text-white hover:bg-violet-600"
          onClick={() => setCount((current) => current + 1)}
        >
          Increase
        </button>
      </div>
    </main>
  );
}

export default App;
