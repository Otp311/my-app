"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect, useState, Suspense } from "react";
import Link from "next/link";
import styles from "./styles.module.css";
import Navbar from "./components/Links";
import NavBar from "./components/navbar";
import Image from "next/image";
import imageone from "../public/imageone.jpg";
import imagetwo from "../public/imagetwo.jpg";
import imagethree from "../public/imagethree.jpg";
import imagefour from "../public/imagefour.jpg";
import Menu from "./components/link";
import photo from "../public/photo.avif";
import Promo from "./components/promo";
import menu from "/public/menu.jpg";
import menu1 from "/public/menu (2).jpg";
import menu2 from "/public/menu (3).jpg";
import Footer from "./components/footer";
import { FiFacebook } from "react-icons/fi";

const HomePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(true);
  }, []);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1 });
    } else {
      controls.start({ opacity: 0 });
    }
  }, [controls, inView]);

  return (
    <div className={styles.container}>
      <Navbar />
      <NavBar />

      <Link
        href="https://www.facebook.com/profile.php?id=100089353745300"
        className={styles.shop}
      >
        <div className={styles.smallbox}>
          <p>V</p>
          <p>I</p>
          <p>S</p>
          <p>I</p>
          <p>T</p>
        </div>
        <div className={styles.us}>
          <p>U</p>
          <p>S</p>
        </div>
        <div className={styles.icon}>
          <FiFacebook size={20} />
        </div>
      </Link>

      <div className={styles.subcontainer}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className={styles.titlepage}
        >
          Hype Up
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
          className={styles.titlepage1}
        >
          Cafe
        </motion.div>
      </div>

      <div className={styles.aboutus}>
        <motion.h3
          ref={ref}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -100 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h3>
        <div className={styles.about}>
          <motion.div
            className={styles.img}
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
            transition={{ duration: 1 }}
          >
            <Image src={photo} alt="coffee" width={400} height={400} />
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 10 }}
            transition={{ duration: 1 }}
            className={styles.parag}
          >
            <p>
              We&apos;re not just about serving a great cup of coffee (though we
              do that exceptionally well!). Hype Up Coffee is a place to
              connect, unwind, and find that extra spark of inspiration. Whether
              you&apos;re a neighborhood regular or just passing through, we
              want you to feel the energy. Our expert baristas craft every drink
              with care and a whole lot of passion. Come for the coffee, stay
              for the vibe. Coffee is our craft. From sourcing the finest beans
              to perfecting our brewing techniques, we&apos;re all about pushing
              boundaries to deliver the most flavorful and exciting cup
              possible. We believe in the power of a perfect espresso, a velvety
              latte, or an artfully prepared cold brew to transform your day.
              Hype Up Coffee is where coffee lovers become coffee connoisseurs.{" "}
              <Link style={{ fontWeight: "700", color: "grey" }} href="/about">
                Learn More
              </Link>
            </p>
          </motion.div>
        </div>
      </div>

      <div className={styles.productWrapper}>
        <div className={styles.offers}>
          <h3>What we offer</h3>
        </div>
        <div className={styles.products}>
          <div className={styles.product}>
            <div className={styles.box}>
              <Image src={imageone} alt="imageone" />

              <div className={styles.boxcontent}>
                <strong>Peanut Butter Cream</strong>
                <i>
                  <p>₱125.00</p>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <Image src={imagetwo} alt="imagetwo" />
              <div className={styles.boxcontent}>
                <strong>Peanut Butter Cream</strong>
                <i>
                  <p>₱125.00</p>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <Image src={imagethree} alt="imagethree" />
              <div className={styles.boxcontent}>
                <strong>Bong Blanc</strong>
                <i>
                  <p>₱125.00</p>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <Image src={imagefour} alt="imagefour" />
              <div className={styles.boxcontent}>
                <strong>Smores Latte</strong>
                <i>
                  <p>₱125.00</p>
                </i>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.more}>
          <Menu />
        </div>
      </div>

      <div className={styles.promo}>
        <div className={styles.ImageEffect}>
          <Promo />
        </div>
      </div>

      <div className={styles.more}>
        <div className={styles.images}>
          <div className={styles.moreimages}>
            <Image
              style={{ outline: "1px solid black" }}
              src={menu}
              alt="menu"
              width={400}
              height={400}
            />
            <Image
              style={{ outline: "1px solid black" }}
              src={menu1}
              alt="menu1"
              width={400}
              height={400}
            />
            <Image
              style={{ outline: "1px solid black" }}
              src={menu2}
              alt="menu2"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
