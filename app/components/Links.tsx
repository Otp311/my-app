import React from "react";
import Link from "next/link";
import styles from "./link.module.css";
import SearchBar from "./searchbar";

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
          <Link className={styles.link} href="/">
            Home
          </Link>
          <Link className={styles.link} href="./menu">
            Menu
          </Link>
          <Link className={styles.link} href="/about" scroll={false}>
            About Us
          </Link>
          <Link className={styles.link} href="#">
            Contact Us
          </Link>

          <div className={styles.sear}>
            <SearchBar />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
