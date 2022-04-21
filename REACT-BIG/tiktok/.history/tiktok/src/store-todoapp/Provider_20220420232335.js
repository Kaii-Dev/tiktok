import { useReducer } from "react";
import Context from "./store-todoapp";

function Provider({children}){
   const [state, dispatch] = useReducer()
   return(
      <div className="">
         <Context.Provider value={[state, dispatch]}>
            {children}
         </Context.Provider>
      </div>
   )
}

export default Provider