"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import coffeeshop from "/public/coffeeshop.jpg";
import social from "/public/social.png";
import social1 from "/public/social1.png";
import social2 from "/public/social2.png";
import social3 from "/public/social3.png";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.backtop}>
          <Link href="/">Back to top</Link>
        </div>
        <div className={styles.socialmedia}>
          <div className={styles.leftcontent}>
            <div className="relative w-20 h-20">
              <Link href="/">
                <Image src={coffeeshop} alt="coffeeshop" />
              </Link>
            </div>
            <p>
              The most Instagrammable Coffee Shop in the Philippines. Serving
              good quality concoctions of espresso-based drinks and
              mouth-watering food.
            </p>
          </div>

          <div className={styles.rightcontent}>
            <div className={styles.contacts}>
              <div className={styles.aboutlink}>
                <Link href="/about">About Us</Link>
              </div>
              <div className={styles.contactlink}>
                <Link href="/services">Contact Us</Link>
              </div>
            </div>
            <div className={styles.socials}>
              <div className={styles.socialimage1}>
                <Link href="#">
                  <Image src={social} alt="socials" />
                </Link>
              </div>
              <div className={styles.socialtwitter}>
                <Link href="/">
                  <Image src={social1} alt="socials1" />
                </Link>
              </div>
              <div className={styles.socialfacebook}>
                <Link href="https://www.facebook.com/profile.php?id=100089353745300">
                  <Image src={social2} alt="socials2" />
                </Link>
              </div>
              <div className={styles.socialinstagram}>
                <Link href="/">
                  <Image src={social3} alt="socials3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
