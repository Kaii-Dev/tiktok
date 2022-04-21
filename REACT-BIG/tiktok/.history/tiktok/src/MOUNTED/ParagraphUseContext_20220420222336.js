import React from "react";

const ParagraphUseContext = ({ theme }) => {
  console.log("Theme: ", theme);
  return (
    <div>
      <p className="{theme}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui sunt
        dolores eveniet molestias. Quod enim consequatur officiis possimus
        ullam. Aliquid!
      </p>
    </div>
  );
};

export default ParagraphUseContext;
