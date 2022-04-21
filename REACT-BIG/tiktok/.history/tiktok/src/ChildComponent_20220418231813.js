import React, { useEffect } from 'react';
import { useState } from 'react';
const ChildComponent = (getData) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
     console.log('childcomponent');
  })
   return (
      <div>
         
      </div>
   );
};

export default ChildComponent;