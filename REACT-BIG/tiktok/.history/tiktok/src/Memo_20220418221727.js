import React from "react";
import { memo } from "react";
const Memo = () => {
  console.log("re-render Memo");
  return (
    <div>
      <h1>HELLO ANH EM</h1>
    </div>
  );
};

export default memo(Memo); //thằng memo không bị re-render mỗi khi thằng app bị render nữa
