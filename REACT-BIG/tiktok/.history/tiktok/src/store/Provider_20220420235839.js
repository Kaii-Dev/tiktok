import { useReducer } from "react";
import Context from "./Context";
import Reducer, { initState } from "./Reducer";
import logger from "../todolist/logger";

function Provider({ children }) {
  const [state, dispatch] = useReducer(Reducer, initState);
  return (
    <div className="">
      <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
    </div>
  );
}

export default Provider;
