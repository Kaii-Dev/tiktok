import { useState } from "react";
import React from "react";
// function App() {
//   const [info, setInfo] = useState({
//     name: "khai le",
//     age: "20",
//     address: "can tho",
//   });

//   const handleInfo = () => {
//     setInfo({
//       ...info,
//       bio: "code run in my dna",
//     });
//   };
//   const [counter, setCounter] = useState(1);
//   const handleIncrease = () => {
//     // set State với callback
//     // setCounter((prevstate) => prevstate + 1);
//     // setCounter((prevstate) => prevstate + 1);
//     // setCounter((prevstate) => prevstate + 1);
//     // setCounter(counter+1)
//   };
//   return (
//     <div className="App">
//       <h1>{JSON.stringify(info)}</h1>
//       <button onClick={handleInfo}>Increase</button>
//     </div>
//   );
// }
//===================TWO-WAY-BINDING CLIP===============///
// const gifts = [
//   "cpui9",
//   "ram 32g",
//   "ssd 1tb",
//   "card màn hình",
//   "usb",
//   "monitor",
// ];
// function App() {
//   const [gift, setGift] = useState(gifts[0]);
//   const handleGift = () => {
//       const random = Math.floor(Math.random(0, 3) * gifts.length);
//       return setGift(gifts[random]);
//   };
//   return (
//     <div style={{ padding: 32 }}>
//       <h1>{gift || "chưa có phần thưởng"}</h1>
//       <button onClick={handleGift}>lấy thưởng</button>
//     </div>
//   );
// }

function App() {
  const [name, setName]
  return (
    <div className="">
      <input type="text" />
    </div>
  );
}

export default App;
