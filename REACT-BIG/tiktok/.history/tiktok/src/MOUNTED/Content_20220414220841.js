import React, { useEffect } from "react";

const Content = () => {
  // 1. useEffect (callback)
  // 2. useEffect (callback, [])
  // 3. useEffect (callback, [deps])
  
  //---------
  // 1. callback luôn luôn được gọi sau khi component mounted
  return (
    <div>
      <h1>hi chào các bạn </h1>
    </div>
  );
};

export default Content;
