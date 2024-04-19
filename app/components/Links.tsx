import React from "react";
import Link from "next/link";
import styles from "./link.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="#">
            Hype Up<br></br> Cafe
          </Link>
        </div>

        <div className={styles.navlink}>
          <Link href="/">Home</Link>
          <Link href="./menu">Menu</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact Us</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
