import { useReducer } from "react";
import Context from "./store";
import Reducer, { initState } from "./Reducer";

function Provider({ children }) {
  const [state, dispatch] = useReducer(Reducer, initState);
  return (
    <div className="">
      <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
    </div>
  );
}

export default Provider;
