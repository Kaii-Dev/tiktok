import React from 'react';

const initState = {
   job: "",
   jobs: [],
 };
 const SET_JOB = "set_job"; //Thằng này để set lại job
 const ADD_JOB = "add_job";
 const DELETE_JOB = "delete_job";
 
 const setJob = (payload) => {
   return {
     type: SET_JOB,
     payload,
   };
 };
 
 const addJob = (payload) => {
   return {
     type: ADD_JOB,
     payload,
   };
 };
 
 const deleteJob = (payload) => {
   return {
     type: DELETE_JOB,
     payload,
   };
 };
 
 const reducer = (state, action) => {
   console.log("Action: ", action);
   console.log("Prev State: ", state);
   let newState;
 
   switch (action.type) {
     case SET_JOB:
       newState = { ...state, job: action.payload };
       break;
     case ADD_JOB:
       newState = { ...state, jobs: [...state.jobs, action.payload] };
       break;
     case DELETE_JOB:
       const newJobs = [...state.jobs];
       newJobs.splice(action.payload, 1); //xoá theo index nên ở đây xóa theo payload, thằng payload này đang là index được xác định ở dưới thẻ span
       newState = { ...state, jobs: newJobs };
       break;
     default:
       throw new Error("invalid action");
   }
   console.log("New State: ", newState);
   return newState;
 };
 
 function Todolist() {
   const [state, dispatch] = useReducer(reducer, initState);
   const inputRef = useRef();
   // destructuring init state ra
   const { job, jobs } = state;
 
   const handleSubmit = () => {
     dispatch(addJob(job));
     dispatch(setJob(""));
     inputRef.current.focus();
   };
 
   return (
     <div className="" style={{ padding: 25 }}>
       <p>TO DO LIST WITH USE-REDUCER</p>
       <input
         ref={inputRef}
         value={job}
         placeholder="Enter to do"
         onChange={(e) => {
           dispatch(setJob(e.target.value));
         }}
       />
       <button onClick={handleSubmit}>Add</button>
       <ul>
         {jobs.map((job, index) => (
           <li key={index}>
             {" "}
             {job}
             <span
               style={{ margin: 20 }}
               onClick={() => {
                 dispatch(deleteJob(index));
               }}
             >
               &times;
             </span>
           </li>
         ))}
       </ul>
     </div>
   );
 }

 export default Todolist