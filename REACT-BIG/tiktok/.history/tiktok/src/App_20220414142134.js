import { useState, useTransition } from "react";
import React from "react";
import Todolist from "./todolist/Todolist";
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

// function App() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const handleSubmit = () => {
//     //call api
//     console.log({
//       name,
//       email,
//     });
//   };
//   return (
//     <div className="">
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="text"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button onClick={handleSubmit}>submit</button>
//     </div>
//   );
// }
// =================== RESPONSE FROM API =========//
// const courses = [
//   {
//     id: 1,
//     name: "html, css",
//   },
//   {
//     id: 2,
//     name: "javascript",
//   },
//   {
//     id: 3,
//     name: "nodejs",
//   },
// ];

// function App() {
//   const [checked, setChecked] = useState([]);

//   const handleSubmit = () => {
//     //call api
//     console.log({ id: checked });
//   };

//   const handleCheck = (id) => {
//     setChecked((prev) => {
//       const isChecked = checked.includes(id);
//       if (isChecked) {
//         return checked.filter((item) => item !== id); // lọc ra những thằng khác id đang nhấn
//       } else {
//         return [...prev, id];
//       }
//     });
//   };
//   console.log(checked);
//   return (
//     <div className="" style={{ padding: 32 }}>
//       {courses.map((course) => (
//         <div key={course.id}>
//           <input
//             type="checkbox"
//             checked={checked.includes(course.id)}
//             onChange={() => handleCheck(course.id)}
//           />
//           {course.name}
//         </div>
//       ))}
//       <button onClick={handleSubmit}>submit</button>
//     </div>
//   );
// }

//============== TO DO LIST ===========/
function App() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);
  console.log(job);

  const handleSubmit = () => {
    setJobs((prev) => [...prev, job]); // lấy giá trị thằng job mà job ở đây được tạo ở dòng setJob(e.target.value)
  };
  return (
    <div style={{ padding: 30 }}>
      <input value={job} onChange={(e) => setJob(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>

      <ul>
        {jobs.map((job, index) => (
          <li key={index}>{job}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
