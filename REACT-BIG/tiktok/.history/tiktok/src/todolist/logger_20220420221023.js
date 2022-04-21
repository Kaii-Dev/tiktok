function logger(reducer) {
  return (prevState, action) => {
     console.group(action.type)
    const newState = reducer(prevState, action);
  };
}
export default logger;
