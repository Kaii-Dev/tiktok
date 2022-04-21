function logger(reducer){
   return (prevState , action) => {
      console.group(action.type);
      console.log('Prev State : ', prevState);

      const nextState = reducer (prevState, action)

      console.log('Next state: ', nextState);
      console.groupEnd);
   }
}