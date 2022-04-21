function logger(reducer){
   return (state, action) => {
      reducer(state, action)
   }
}
export default logger