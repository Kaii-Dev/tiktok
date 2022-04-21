export const initState = {
   job: "",
   jobs: [],
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

 export default reducer