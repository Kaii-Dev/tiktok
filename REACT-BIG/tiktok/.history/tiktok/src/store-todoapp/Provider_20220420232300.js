import Context from "./store-todoapp";

function Provider({children}){
   const reducer = useRe
   return(
      <div className="">
         <Context.Provider vale>
            {children}
         </Context.Provider>
      </div>
   )
}

export default Provider