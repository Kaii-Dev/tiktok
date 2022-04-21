function logger(reducer){
   return () => {
      reducer(state, action)
   }
}
export default logger