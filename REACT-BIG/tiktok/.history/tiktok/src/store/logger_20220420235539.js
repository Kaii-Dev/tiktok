function logger(reducer){
   return (prevState , action) => {
      console.group(act);
      console.log(action.type);
      const nextState = reducer (prevState, action)
   }
}