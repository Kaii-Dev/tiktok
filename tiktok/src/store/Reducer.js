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
      };
    case ADD_TODO_INPUT:
      return {
        ...state,
        todos: [...state.todos, action.payload], // bảo lưu cái thằng todo cũ trong obj state lúc này state đang là initState bên Provider định nghĩa, và thêm action.payload
      };
    default:
      throw new Error("invalid");
  }
}

export { initState };
export default Reducer;
