import React from "react";
import styles from "./styles.module.css";
import Navbar from "./components/Links";
import Image from "next/image";
import imageone from "../public/imageone.jpg";
import imagetwo from "../public/imagetwo.jpg";
import imagethree from "../public/imagethree.jpg";
import imagefour from "../public/imagefour.jpg";
import Menu from "./components/link";
import photo from "../public/photo.avif";
import Promo from "./components/promo";

const HomePage = () => {
  return (
    <div className={styles.container}>
      <Navbar />

      <div className={styles.subcontainer}>
        <div className={styles.titlepage}>
          Hype Up<br></br> Cafe
        </div>
      </div>

      <div className={styles.aboutus}>
        <h3>About Us</h3>
        <div className={styles.about}>
          <Image src={photo} alt="coffee" width={400} height={300} />

          <div className={styles.parag}>
            <p>
              We're not just about serving a great cup of coffee (though we do
              that exceptionally well!). Hype Up Coffee is a place to connect,
              unwind, and find that extra spark of inspiration. Whether you're a
              neighborhood regular or just passing through, we want you to feel
              the energy. Our expert baristas craft every drink with care and a
              whole lot of passion. Come for the coffee, stay for the vibe.
              Coffee is our craft. From sourcing the finest beans to perfecting
              our brewing techniques, we're all about pushing boundaries to
              deliver the most flavorful and exciting cup possible. We believe
              in the power of a perfect espresso, a velvety latte, or an
              artfully prepared cold brew to transform your day. Hype Up Coffee
              is where coffee lovers become coffee connoisseurs. Learn More
            </p>
          </div>
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
    </div>
  );
};

export default HomePage;
