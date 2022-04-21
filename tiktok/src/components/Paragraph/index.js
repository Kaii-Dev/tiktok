import React from "react";
import styles from "./Paragraph.module.css";

console.log(styles);

const Paragraph = () => {
  return (
    <div>
      <h2 className={styles.paragraph}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
        aliquid beatae non velit nisi dignissimos?
      </h2>
    </div>
  );
};

export default Paragraph;
