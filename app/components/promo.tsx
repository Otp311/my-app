"use client";

import React from "react";
import styles from "./promo.module.css";
import Image from "next/image";
import cone from "/public/cone.jpg";
import ctwo from "/public/ctwo.jpg";
import cthree from "/public/cthree.jpg";
import imagethree from "/public/imagethree.jpg";
import Link from "next/link";

const Promo = () => {
  return (
    <div className={styles.promo}>
      <div className={styles.head}>
        <h2>Avail Our Promo</h2>
      </div>
      <div className={styles.images}>
        <div className={styles.image1}>
          <div className="relative h-60 w-60">
            <Link href="/menu">
              <Image src={cone} alt="cone" layout="fill" objectFit="cover" />
            </Link>
          </div>
        </div>

        <div className={styles.image2}>
          <div className="relative h-60 w-60">
            <Link href="/menu">
              <Image src={ctwo} alt="ctwo" layout="fill" objectFit="cover" />
            </Link>
          </div>
        </div>

        <div className={styles.image3}>
          <div className="relative h-60 w-60">
            <Link href="/menu">
              <Image
                src={cthree}
                alt="cthree"
                layout="fill"
                objectFit="cover"
              />
            </Link>
          </div>
        </div>

        <div className={styles.image4}>
          <div className="relative h-60 w-60">
            <Link href="/menu">
              <Image
                src={imagethree}
                alt="imagethree"
                layout="fill"
                objectFit="cover"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
