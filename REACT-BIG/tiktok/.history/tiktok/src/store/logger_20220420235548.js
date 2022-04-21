function logger(reducer){
   return (prevState , action) => {
      console.group(action.type);
      console.log('');
      const nextState = reducer (prevState, action)
   }
}