import React, { useEffect } from "react";
import { useState } from "react";
import App from "./App";
const ChildComponent = ({getData}) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    console.log("childcomponent - useEffect - getData");

    getData("comments")
      .then((res) => res.json())
      .then((res) => {
        const comments = res.data;
        setComments(comments);
      });
  }, [getData]);

  return <div></div>;
};

export default ChildComponent;
