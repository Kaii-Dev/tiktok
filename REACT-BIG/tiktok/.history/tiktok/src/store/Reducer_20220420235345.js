import { SET_TODO_INPUT } from "./constants";

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
      };
    default:
      throw new Error("invalid");
  }
}

export { initState };
export default Reducer;
