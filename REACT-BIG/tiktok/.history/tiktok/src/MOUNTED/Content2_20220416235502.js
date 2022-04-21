import React, { useState } from 'react';

const Content2 = () => {
   const [count, setCount] =useState(1)
   const handleIncrease = () => {}
   return (
      <div>
         <h1>{count}</h1>
         <button onClick={handleIncrease}>Click me!</button>
      </div>
   );
};

export default Content2;