import React from "react";
import { motion } from "framer-motion";
import styles from "./navbar.module.css";

const navBar = ({ isToggled }) => {
  const items = ["Home", "Products", "Services", "About"];

  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  return (
    <>
      <motion.ul
        className={styles.navlist}
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={navList}
      >
        {items.map((item) => (
          <motion.li className={styles.navItem} variants={navItem} key={item}>
            <p>{item}</p>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
};

export default navBar;
