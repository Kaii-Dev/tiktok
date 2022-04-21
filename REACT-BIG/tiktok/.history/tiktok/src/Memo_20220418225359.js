import React from "react";
import { memo } from "react";
const Memo = (handleIncrease) => {
  console.log("re-render Memo");
  return (
    <div>
      <h1>HELLO ANH EM</h1>
      <button onClick={handleIncrease}>Click me!</button>
    </div>
  );
};

export default memo(Memo); //thằng memo không bị re-render mỗi khi thằng app bị render nữa
