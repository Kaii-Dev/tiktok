function logger(reducer){
   return (prevState , action) => {
      console.group(obje);
      console.log(action.type);
      const nextState = reducer (prevState, action)
   }
}