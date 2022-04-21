import React, { useEffect } from 'react';
import { useState } from 'react';
const ChildComponent = (getData) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
     console.log('childcomponent - useEffect - getData');
  })

  getData('comments')
   return (
      <div>
         
      </div>
   );
};

export default ChildComponent;