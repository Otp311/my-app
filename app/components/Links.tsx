"use client";

import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./link.module.css";
import { FiHome, FiMenu, FiInfo, FiMail } from "react-icons/fi";

const Links = () => {
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;

      setIsScrollingDown(currentScrollTop > lastScrollTop);
      setLastScrollTop(currentScrollTop);
    };

    const handleVisibility = () => {
      setIsVisible(!isScrollingDown || window.pageYOffset < 50);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleVisibility);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleVisibility);
    };
  }, [isScrollingDown, lastScrollTop]);
  return (
    <header className={styles.header}>
      <nav className={`${styles.navbar} ${!isVisible ? styles.hidden : ""}`}>
        <div className={styles.logo}>
          <Link href="#">
            Hype Up<br></br> Cafe
          </Link>
        </div>

        <div className={styles.navlink}>
          <Link className={styles.link} href="/">
            Home
          </Link>
          <Link className={styles.link} href="/menu">
            Menu
          </Link>
          <Link className={styles.link} href="/about">
            About Us
          </Link>
          <Link className={styles.link} href="/contact">
            Contact Us
          </Link>
        </div>
      </nav>

      <div className={styles.nav2}>
        <div className={styles.navicon}>
          <div className={styles.icontxt}>
            <Link href="/">
              <FiHome size={20} />
            </Link>
            Home
          </div>

          <div className={styles.icontxt}>
            <Link href="/menu">
              <FiMenu size={20} />
            </Link>
            Menu
          </div>

          <div className={styles.icontxt}>
            <Link href="/about">
              <FiInfo size={20} />
            </Link>
            About Us
          </div>

          <div className={styles.icontxt}>
            <Link href="/component/contact.tsx">
              <FiMail size={20} />
            </Link>
            Contact Us
          </div>
        </div>
      </div>
    </header>
  );
};

export default Links;
