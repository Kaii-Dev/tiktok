import React from "react";
import ParagraphUseContext from "./ParagraphUseContext";

const UseContext = ({theme}) => {
  return (
    <div>
      <ParagraphUseContext theme={theme}></ParagraphUseContext>
    </div>
  );
};

export default UseContext;
