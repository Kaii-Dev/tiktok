import { SET_JOB, ADD_JOB, DELETE_JOB } from "./Constants";
export const initState = {
  job: "",
  jobs: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return = { ...state, job: action.payload };
      break;
    case ADD_JOB:
      return = { ...state, jobs: [...state.jobs, action.payload] };
      break;
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      newJobs.splice(action.payload, 1); //xoá theo index nên ở đây xóa theo payload, thằng payload này đang là index được xác định ở dưới thẻ span
      return = { ...state, jobs: newJobs };
      break;
    default:
      throw new Error("invalid action");
  }
};

export default reducer;
