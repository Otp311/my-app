"use client";

import React from "react";
import Link from "next/link";
import styles from "./link.module.css";

const LinkComponent = () => {
  return (
    <div className={styles.links}>
      <div className={styles.navbar}>
        <Link href="/" className={styles.navitem}>
          <img src="/coffeeshop.jpg" alt="cofeeshop"></img>
        </Link>

        <div className={styles.navbaritems1}>
          <Link className="px-5" href="#">
            Home
          </Link>
          <Link className="px-5" href="#">
            What we Offer
          </Link>
          <Link className="px-5" href="#">
            Menu
          </Link>
          <Link className="px-5" href="#">
            About Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LinkComponent;
