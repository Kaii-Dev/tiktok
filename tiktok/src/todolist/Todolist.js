import React, {
  useEffect,
  useState,
  useCallback,
  useReducer,
  useRef,
} from "react";

import reducer, { initState } from "./Reducer";
import { SET_JOB, ADD_JOB, DELETE_JOB } from "./Constants";
import { setJob, addJob, deleteJob } from "./Actions";
import logger from "./logger";
function Todolist() {
  const [state, dispatch] = useReducer(logger(reducer), initState);
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

export default Todolist;
