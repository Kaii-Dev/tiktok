import React, { useEffect, useState } from "react";

// 1. useEffect (callback)
      //- gọi call back mỗi khi component re-render
      //- gọi callback sau khi component đc thêm  vào dom. tức là lúc đầu nó vẫn chạy useEFect trước nhưng để đó, sau đó xử lý để đưa ele vào dom rồi nó mới quay lại back giá trị của useEFFECT
// 2. useEffect (callback, [])
// 3. useEffect (callback, [deps])

//---------
// 1. callback luôn luôn được gọi sau khi component mounted
const Content = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log("mouted");
  });
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {console.log("render")}
    </div>
  );
};

export default Content;
