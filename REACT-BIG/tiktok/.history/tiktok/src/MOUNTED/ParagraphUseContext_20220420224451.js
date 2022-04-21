import React, { useContext } from "react";
import ThemeContext from "../App";
const ParagraphUseContext = () => {
   const theme = useContext()
  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sunt
        dolores eveniet molestias. Quod enim consequatur officiis possimus
        ullam. Aliquid!
      </p>
    </div>
  );
};

export default ParagraphUseContext;
