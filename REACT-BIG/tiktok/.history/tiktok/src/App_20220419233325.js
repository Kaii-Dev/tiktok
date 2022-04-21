import {
  memo,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  useState,
  useTransition,
} from "react";
import React from "react";
import Content from "./MOUNTED/Content";
import Content2 from "./MOUNTED/Content2";
import Memo from "./Memo";
import ChildComponent from "./ChildComponent";
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

//=================== MOUNTED/ useEFFECT/ useLayoutEffect ===============//

// function App() {
//   const [show, setShow] = useState(false);
//   return (
//     <div className="" style={{ padding: 20 }}>
//       <button onClick={() => setShow(!show)}>Toggle</button>
//       {/* nếu mà có show thì mới render ra content */}
//       {/* {show && <Content></Content>} */}
//       {show && <Content2></Content2>}
//     </div>
//   );
// }

// ======================== USE REF ======================/
// function App() {
//   const [count, setCount] = useState(60);

//   const timerId = useRef();
//   const prevCount = useRef();
//   const h1Ref = useRef();

//   console.log(timerId.current);

//   useEffect(() => {
//     prevCount.current = count;
//   }, [count]);

//   useEffect(() => {
//     console.log(h1Ref.current);
//   });

//   const handleStart = () => {
//     timerId.current = setInterval(() => {
//       setCount((prevCount) => prevCount - 1);
//     }, 1000);
//     console.log("start->", timerId.current);
//   };

//   const handleStop = () => {
//     clearInterval(timerId.current);
//     console.log("stop", timerId.current);
//   };

//   console.log(count, prevCount.current);
//   return (
//     <div className="" style={{ padding: 20 }}>
//       <h1 ref={h1Ref}>{count}</h1>
//       <button onClick={handleStart}>Start</button>
//       <button onClick={handleStop}>Stop</button>
//     </div>
//   );
// }
// VÍ DỤ VỀ VIỆC USE REF KO RE RENDER TRÊN UI
// function App() {
//   const [countStateVal, setCountStateVal] = useState(0);
//   const countRefVal = useRef(0);
//   const handeClick = () => {
//     // setCountStateVal(countStateVal + 1);
//     countRefVal.current = countRefVal.current + 1;
//     console.log(countRefVal.current);
//   };
//   console.log(countRefVal.current);

//   return (
//     <div>
//       <button onClick={handeClick}>Click Me</button>
//       <h1>{` value of ref ${countRefVal.current}`}</h1>
//     </div>
//   );
// }

// VÍ DỤ VỀ VIỆC USE REF TRUY VẤN ĐẾN 1 CÂY DOM
// function App() {
//   const ref = useRef(null);
//   console.log(ref);
//   useEffect(() => {
//     ref.current.focus(); // ref.current là 1 cây DOM chúng ta trỏ đến hàm focus của input nên sau khi reload thẻ input sẽ tự động được focus
//   }, []);
//   return (
//     <div>
//       <input type="text" name="" id="" ref={ref} />
//       <button>CLICK BTN</button>
//     </div>
//   );
// }

// ======================== MEMO METHOD ======================/
// function App() {
//   const [count, setCount] = useState(0);
//   const handleIncrease = () => {
//     setCount(count + 1);
//   };
//   return (
//     <div style={{ padding: "80px 25px" }}>
//       {/* vì thằng component Memo là thằng con của compo App nên sẽ bị re-render theo, vì vậy sử dụng phương thức memo bên file Memo.js để nó theo dõi props của Memo có bị thay đổi giá trị sau mỗi lần re-render không? nếu có mới cho thay đổi giá trị sau mỗi lần re-render  */}
//       <Memo></Memo>
//       <h1>{count}</h1>
//       <button onClick={handleIncrease}>Click me!</button>
//     </div>
//   );
// }

//=========================== USE CALLBACK=====================/

// function App() {
//   const [count, setCount] = useState(0);
//   const handleIncrease = useCallback(() => {
//     setCount((prevCount) => prevCount + 1);
//   }, []);
//   return (
//     <div style={{ padding: "80px 25px" }}>
//       {/* onIncrease là props tự tạo với cú pháp  on + "..." */}
//       <Memo onIncrease={handleIncrease}></Memo>
//       <h1>{count}</h1>
//     </div>
//   );
// }
//ví dụ 2
// function App() {
//   const [users, setUsers] = useState([]);
//   const getData = useCallback((type) => {
//     return fetch(`https://reqres.in/api/${type}`);
//   }, []);

//   const handleClick = () => {
//     getData("users")
//       .then((res) => res.json())
//       .then((res) => {
//         const users = res.data;
//         setUsers(users);
//       });
//   };

//   return (
//     <div style={{ padding: "80px 25px" }}>
//       <p>Data:</p>
//       <button onClick={handleClick}>Get Users Data</button>
//       <p>{JSON.stringify(users)}</p>
//       <ChildComponent getData={getData}></ChildComponent>
//     </div>
//   );
// }

//========================== USE MEMO ======================/

// function App() {
//   const [name, setName] = useState("");
//   const [price, setPrice] = useState("");
//   const [product, setProduct] = useState([]);

//   const handleSubmit = () => {
//     setProduct([...product, { name, price: parseInt(price) }]);
//     setName("");
//     setPrice("");

//     domRef.current.focus()
//   };

//   const domRef = useRef();

//   const total = useMemo(() => {
//     const result = product.reduce((preProduct, currProduct) => {
//       console.log("tinh toan lai");
//       return preProduct + currProduct.price; // dòng này để tính giá trị của nhũng món đồ trong mảng trước đó + giá trị của món đồ đc add hiện tại
//     }, 0);
//     return result;
//   }, [product]);
//   return (
//     <div style={{ padding: 25 }}>
//       <input
//         ref={domRef}
//         value={name}
//         type="text"
//         placeholder="Enter name"
//         onChange={(e) => setName(e.target.value)}
//       />
//       <br />
//       <input
//         value={price}
//         type="text"
//         placeholder="Enter price"
//         onChange={(e) => setPrice(e.target.value)}
//       />
//       <br />
//       <button onClick={handleSubmit}>Add</button>
//       <br />
//       Total: {total}
//       <ul>
//         {product.map((item, index) => (
//           <li key={index}>
//             {item.name} - {item.price}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

//================================== USE REDUCER ============================//
//USESTATE
//1. Init state : 0
//2. Action : up /down

//USE REDUCER
//1. Init state
//2. Actions:
//3. Reducer : chạy theo nguyên tắc nhận đầu vào và trả đầu ra mới, mỗi khi reducer đc gọi thì state hniệ tại là gì và action trả ra là gì
//4. Dispatch

// //init state
// const initState = 0;
// //Action
// const UP_ACTION = "up";
// const DOWN_ACTION = "down";
// const ERROR_ACTION = "";
// //3. Reducer
// const reducer = (state, action) => {
//   console.log("reducer running...");
//   switch (action) {
//     case UP_ACTION:
//       return state + 1;
//     case DOWN_ACTION:
//       return state - 1;
//     default:
//       throw new Error("testing invalid action");
//   }
// };

// function App() {
//   // initState đang là init value của count => =0
//   const [count, dispatch] = useReducer(reducer, initState);
//   return (
//     <div className="" style={{ padding: 25 }}>
//       <h1>{count}</h1>
//       <button onClick={() => dispatch(DOWN_ACTION)}>Down</button>
//       <button onClick={() => dispatch(UP_ACTION)}>Up</button>
//       <button onClick={() => dispatch(ERROR_ACTION)}>Error</button>
//     </div>
//   );
// }

// ví dụ 2 : TO DO LIST WITH REDUCER
const initState = {
  job : '',
  jobs: []
};
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';
function App() {
  return (
    <div className="" style={{ padding: 25 }}>
      <p>TO DO LIST WITH USE-REDUCER</p>
      <input type="text" placeholder="" />
      <button>Add</button>
      <ul>
        <li>Quet nha &times;</li>
        <li>Di hoc &times;</li>
        <li>Rua chen &times;</li>
      </ul>
    </div>
  );
}

export default App;
