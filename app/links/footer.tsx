"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./footer.module.css";
import FooterLinks from "./footerlinks";

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.backtotop}>
        <Link className={styles.selflink} href="#">
          Back to top
        </Link>
      </div>

      <div className={styles.info}>
        <div className={styles.footerinfo}>
          <img
            src="/coffeeshop.jpg"
            alt="Coffee Shop"
            style={{
              width: "65px",
              height: "65px",
              borderRadius: "15px",
            }}
          />
          <div className={styles.parag}>
            <p>
              The most Instagrammable Coffee Shop in the Philippines. Serving
              good quality concoctions of espresso-based drinks and
              mouth-watering food.
            </p>
          </div>
        </div>

        <div>
          <FooterLinks />
        </div>

        <div className={styles.contact}>
          <div className={styles.contactus}>
            <div className={styles.con}>
              <Link href="#">About Us</Link>
            </div>
            <div className={styles.con1}>
              <Link href="#">Contact Us</Link>
            </div>
          </div>
          <div className={styles.socials}>
            <div className={styles.img1}>
              <Link href="#">
                <img
                  src="/social.png"
                  alt="Socials"
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                ></img>
              </Link>
            </div>

            <div className={styles.img2}>
              <Link href="#">
                <img
                  src="/social1.png"
                  alt="Socials1"
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                ></img>
              </Link>
            </div>

            <div className={styles.img3}>
              <Link href="#">
                <img
                  src="/social2.png"
                  alt="Socials2"
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                ></img>
              </Link>
            </div>

            <div className={styles.img4}>
              <Link href="#">
                <img
                  src="/social.png"
                  alt="Socials3"
                  style={{
                    width: "30px",
                    height: "30px",
                  }}
                ></img>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
