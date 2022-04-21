function logger(reducer) {
  return (prevState, action) => {
    const newState = reducer(state, action);
  };
}
export default logger;
