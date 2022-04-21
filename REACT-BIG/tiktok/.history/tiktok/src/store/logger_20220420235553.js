function logger(reducer){
   return (prevState , action) => {
      console.group(action.type);
      console.log('Prev State : ');
      const nextState = reducer (prevState, action)
   }
}