import React, { useState } from 'react';

const Content2 = () => {
   const [count, setCount] =useState(1)
   return (
      <div>
         <h1>{count}</h1>
         <button on>Click me!</button>
      </div>
   );
};

export default Content2;