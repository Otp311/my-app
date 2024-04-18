import React from "react";
import Link from "next/link";
import styles from "./footerlinks.module.css";

const FooterLinks = () => {
  return (
    <div className={styles.footerlinks}>
      <div className={styles.link1}>
        <Link href="#">What We Offer</Link>
      </div>
      <div className={styles.link2}>
        <Link href="#">Menu</Link>
      </div>
      <div className={styles.link3}>
        <Link href="#">About Us</Link>
      </div>
    </div>
  );
};

export default FooterLinks;
