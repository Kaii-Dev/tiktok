import { useState } from "react";
import React from "react";
function App() {
  const [counter, setCounter] = useState(1);
  const handleIncrease = () => {
      // set State với callback
    // setCounter((prevstate) => prevstate + 1);
    // setCounter((prevstate) => prevstate + 1);
    // setCounter((prevstate) => prevstate + 1);
    // setCounter(counter+1)
  };
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
