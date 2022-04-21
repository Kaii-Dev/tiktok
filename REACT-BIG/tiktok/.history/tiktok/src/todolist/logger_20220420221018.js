function logger(reducer) {
  return (prevState, action) => {
     console.group(action)
    const newState = reducer(prevState, action);
  };
}
export default logger;
