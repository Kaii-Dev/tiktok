import React, { useEffect } from "react";


  // 1. useEffect (callback)
  // 2. useEffect (callback, [])
  // 3. useEffect (callback, [deps])
  
  //---------
  // 1. callback luôn luôn được gọi sau khi component mounted
  const Content = () => {
     useEffect()
  return (
    <div>
      <h1>hi chào các bạn </h1>
    </div>
  );
};

export default Content;
