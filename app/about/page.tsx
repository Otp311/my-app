"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import style from "./about.module.css";
import Image from "next/image";
import about2 from "/public/about2.avif";
import Navbar from "../components/Links";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import bean from "/public/bean.jpg";
import coffee1 from "/public/coffee1.jpg";

const fadeInanimationVariant = {
  initial: {
    opacity: 0,
    x: 10,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const FadeInanimationVariant = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
};

const AboutUs = () => {
  //first animation
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
      <NavBar />

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
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 30 }}
            transition={{ duration: 1 }}
            className={style.aboutimage}
          >
            <Image src={about2} alt="about" width={300} height={400} />
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

        <motion.div
          variants={fadeInanimationVariant}
          initial="initial"
          transition={{ duration: 1.5 }}
          whileInView="animate"
          className={style.camefrom}
        >
          <Image src={bean} alt="bean" width={300} height={400} />

          <div className={style.card}>
            <h1>The Globe-Trotting Story</h1>
            <p>
              Our coffee beans weren&apos;t content to stay in just one place.
              They&apos;re adventurers, world travelers, with stories to tell.
              Each sip is a journey from the Ethiopian highlands to the
              sun-drenched slopes of Colombia, to the volcanic soils of
              Indonesia. We carefully source our beans from small farms with big
              hearts, ensuring your cup isn't just delicious, it's a force for
              good.
            </p>

            <p>
              Our coffee beans have more passport stamps than you do!
              They&apos;ve scaled cloud-kissed mountains in Colombia, basked in
              the equatorial warmth of Sumatra, and danced with the winds of
              Ethiopia. Each origin has a tale to tell, and every roast delivers
              a world of flavor straight to your cup.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={FadeInanimationVariant}
          initial="initial"
          transition={{ duration: 1.5 }}
          whileInView="animate"
          className={style.explorer}
        >
          <Image src={coffee1} alt="coffee1" width={300} height={400} />

          <div className={style.card2}>
            <h1>The Bean with Wanderlust</h1>
            <p>
              Forget travel guides, our coffee beans write their own.
              They&apos;ve trekked through mist-shrouded rainforests, soaked up
              the golden rays of equatorial sun, and embraced the rich volcanic
              soil of distant islands. Our commitment is to bring those journeys
              home, transforming those experiences into the most vibrant,
              wanderlust-filled coffee you'll ever taste.
            </p>

            <p>
              Our coffee beans don&apos;t believe in boundaries. They journey
              from the fertile highlands with a thirst for adventure. Each sip
              is infused with the fearless spirit of a bean that refused to stay
              put. We source from partners who share this love for the
              unexpected, the unique, the bold. This is coffee for the restless
              at heart.
            </p>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
