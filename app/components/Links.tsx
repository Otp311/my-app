"use client";

import React from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./link.module.css";

const Links = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 5,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
          className={styles.logo}
        >
          <Link href="/">
            Hype Up<br></br> Cafe
          </Link>
        </motion.div>

        <switch className={styles.navlink}>
          <Link className={styles.link} href="/">
            Home
          </Link>
          <Link className={styles.link} href="/menu">
            Menu
          </Link>
          <Link className={styles.link} href="/about">
            About Us
          </Link>
          <Link className={styles.link} href="/services">
            Contact Us
          </Link>
        </switch>
      </nav>
    </header>
  );
};

export default Links;
