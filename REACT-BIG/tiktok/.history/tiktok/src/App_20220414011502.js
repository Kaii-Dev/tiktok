import { useState } from "react";
import React from "react";
function App() {
  const [info, setInfo] = useState({
    name: "khai le",
    age: "20",
    address: "can tho",
  });

  const handleInfo =() =>{
    setInfo({
      ...info,
      bio: "code run in my dna"
    })
  }
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
      <button onClick={hand}>Increase</button>
    </div>
  );
}

export default App;
