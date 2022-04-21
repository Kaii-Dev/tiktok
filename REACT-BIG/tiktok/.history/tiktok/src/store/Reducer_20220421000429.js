import { SET_TODO_INPUT } from "./constants";
import { ADD_TODO_INPUT } from "./constants";

const initState = {
  todos: [],
  input: "",
};

function Reducer(state, action) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput: action.payload,
      }
      case ADD_TODO_INPUT:
        return {
          ...state ,
  todos: [s],
          
        }
    default:
      throw new Error("invalid");
  }
}

export { initState };
export default Reducer;
