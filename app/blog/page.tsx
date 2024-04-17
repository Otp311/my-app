import React from "react";
import styles from "./blog.module.css";
import LinkComponent from "../compponents/Links";

const Blog = () => {
  return (
    <div className={styles.container}>
      <div>
        <LinkComponent />
      </div>

      <div className={styles.bigImage}>
        <div className={styles.contentimg}>
          <img src="./bgimg.jpg" alt="background"></img>
        </div>
      </div>
    </div>
  );
};

export default Blog;
