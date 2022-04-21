import React, { useEffect, useState } from "react";

const Content2 = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  // trường hợp useEffect: setCount(count + 1) sẽ tăng dần lên tới 3 nếu bấm lần nữa sẽ thành 4, lúc đó content sẽ bị render lại, thằng count đang là 4 khi nó chạy vào callback nhưng chưa vội thay đổi và nó sẽ chạy xuống 
  useEffect(() => {
    if (count > 3) {
      setCount(0);
    }
  }, [count]);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>Click me!</button>
    </div>
  );
};

export default Content2;
