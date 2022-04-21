function logger(reducer) {
  return (state, action) => {
    const newState = reducer(state, action);
  };
}
export default logger;
