function logger(reducer) {
  return (prevState, action) => {
    console.group(action.type);
    const newState = reducer(prevState, action);
    return newState;
  };
}
export default logger;