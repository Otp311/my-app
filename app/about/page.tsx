"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import style from "./about.module.css";
import Image from "next/image";
import about2 from "/public/about2.avif";
import Navbar from "../components/Links";
import Footer from "../components/footer";

const AboutUs = () => {
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
    <div className={style.Container}>
      <Navbar />

      <div className={style.aboutContainer}>
        <div className={style.h1}>
          <div className={style.textContainer}>
            <motion.h1
              ref={ref}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
              transition={{ duration: 0.1 }}
            >
              A
            </motion.h1>
            <motion.h1
              ref={ref}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
              transition={{ duration: 0.2 }}
            >
              B
            </motion.h1>
            <motion.h1
              ref={ref}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
              transition={{ duration: 0.3 }}
            >
              O
            </motion.h1>
            <motion.h1
              ref={ref}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
              transition={{ duration: 0.4 }}
            >
              U
            </motion.h1>
            <motion.h1
              ref={ref}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
              transition={{ duration: 0.5 }}
            >
              T
            </motion.h1>
          </div>
          <div className={style.textContainer2}>
            <motion.h1
              ref={ref}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
              transition={{ duration: 0.6 }}
            >
              U
            </motion.h1>
            <motion.h1
              ref={ref}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -50 }}
              transition={{ duration: 0.7 }}
            >
              S
            </motion.h1>
          </div>
        </div>
        <div className={style.aboutUs}>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
            transition={{ duration: 1 }}
            className={style.aboutimage}
          >
            <Image src={about2} alt="about" width={400} height={400} />
          </motion.div>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
            transition={{ duration: 1 }}
            className={style.texts}
          >
            <p>
              Hype Up Cafe isn't just about the coffee (although we take our
              beans and brews very seriously!). It's a place where the energy
              buzzes, creativity flows as freely as our signature lattes, and
              connections spark over shared passions and unexpected
              conversations.
            </p>
            <br></br>
            <p>
              Whether you're fueling up for a big day with a triple-shot
              espresso, need a cozy corner to chill out with friends, or are
              looking to meet like-minded people who get your quirky humor and
              big dreams, we're your go-to spot. We believe in the power of
              community, the inspiration that comes from being around other
              driven individuals, and of course, the magical way a great cup of
              coffee can change your whole day.
            </p>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
