function logger(reducer){
   return (prevState , action) => {
      console.log(object);
      console.log(action.type);
      const nextState = reducer (prevState, action)
   }
}