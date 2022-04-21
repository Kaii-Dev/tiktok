import React from "react";
import { memo } from "react";
const Memo = () => {
  console.log("re-render Memo");
  return (
    <div>
      <h1>HELLO ANH EM {count}</h1>
    </div>
  );
};

export default memo(Memo);
