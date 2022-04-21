function logger(reducer){
   return (prevState , action) => {
      console.group(action.type);
      console.log(action.type);
      const nextState = reducer (prevState, action)
   }
}