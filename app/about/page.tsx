"use client";

import React from "react";
import style from "./about.module.css";
import Image from "next/image";
import about2 from "/public/about2.avif";
import Navbar from "../components/Links";
import Footer from "../components/footer";

const AboutUs = () => {
  return (
    <div className={style.Container}>
      <Navbar />

      <div className={style.aboutContainer}>
        <div className={style.h1}>
          <h1>About Us</h1>
        </div>
        <div className={style.aboutUs}>
          <div className={style.aboutimage}>
            <Image src={about2} alt="about" width={400} height={400} />
          </div>
          <div className={style.texts}>
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
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
