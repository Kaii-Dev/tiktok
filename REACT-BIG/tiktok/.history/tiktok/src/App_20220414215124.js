import { useState, useTransition } from "react";
import React from "react";
import Content from "./MOUNTED/Content";

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
// function App() {
//   const [job, setJob] = useState("");
//   const [jobs, setJobs] = useState(() => {
//     const localStorageJob = localStorage.getItem("jobs");
//     const parseJob = JSON.parse(localStorageJob);
//     return parseJob ?? [];
//   });

//   const handleSubmit = () => {
//     setJobs((prev) => {
//       const arrJob = [...prev, job];
//       localStorage.setItem("jobs", JSON.stringify(arrJob)); //
//       return arrJob;
//     });
//     setJob("");
//   };

//   const handlDelete = (id) => {
//     const getDataLocalStorage = JSON.parse(localStorage.getItem("jobs"));
//     const newJobs = getDataLocalStorage.filter((item, index) => index !== id); // lọc ra những thằng có index khác với cái id của nút đang được bấm xóa
//     // đưa nó lên lại localstorage
//     localStorage.setItem("jobs", JSON.stringify(newJobs));
//     setJobs(newJobs);
//   };
//   return (
//     <div style={{ padding: 30 }}>
//       <input value={job} onChange={(e) => setJob(e.target.value)} />
//       <button onClick={handleSubmit}>Add</button>

//       <ul>
//         {jobs.map((job, index) => (
//           <li key={index}>
//             {job}
//             <button
//               style={{ marginLeft: 25 }}
//               onClick={() => handlDelete(index)}
//             >
//               {" "}
//               xóa
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

//=================== MOUNTED ===============//

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="" style={{ padding: 20 }}>
      <button onClick={()}>Toggle</button>
      {/* nếu mà có show thì mới render ra content */}
      {show && <Content></Content>} 
    </div>
  );
}
export default App;
