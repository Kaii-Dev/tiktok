import React from "react";
import { memo } from "react";
const Memo = ({ count }) => {
  console.log("re-render Memo");
  return (
    <div>
      <h1>HELLO ANH EM {count}</h1>
    </div>
  );
};

export default memo(Memo);
