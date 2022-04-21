import { useState } from "react";
import React from "react";
function App() {
  const [counter, setCounter] = useState(1);
  const handleIncrease = () =>{
    
  }
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  );
}

export default App;
