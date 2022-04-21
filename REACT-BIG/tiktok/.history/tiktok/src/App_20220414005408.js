import { useSate } from "react";
import React from "react";
function App() {
  const [counter, setCounter] = useSate(1);
  return (
    <div className="App">
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
