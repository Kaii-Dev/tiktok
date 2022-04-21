import React, { useContext } from "react";
import {} from "../App";

const ParagraphUseContext = () => {
  const theme = useContext(ThemeContext);

  return (
    <div>
      <p className={theme}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sunt
        dolores eveniet molestias. Quod enim consequatur officiis possimus
        ullam. Aliquid!
      </p>
    </div>
  );
};

export default ParagraphUseContext;
