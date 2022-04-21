import { SET_TODO_INPUT } from "./constants";

const initState = {
  todos: [],
  input: "",
};

function Reducer(action, type) {
  switch (action.type) {
    case SET_TODO_INPUT:
      return {
        ...state,
        todoInput : 
      }
  }
}

export { initState };
export default Reducer;
