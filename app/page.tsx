import React from "react";
import Link from "next/link";
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
import menu from "/public/menu.jpg";
import menu1 from "/public/menu (2).jpg";
import menu2 from "/public/menu (3).jpg";
import coffeeshop from "/public/coffeeshop.jpg";
import social from "../public/social.png";
import social1 from "../public/social1.png";
import social2 from "../public/social2.png";
import social3 from "../public/social3.png";

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

      <footer>
        <div className={styles.footer}>
          <Link href="/">Back to top</Link>
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
                  <Link href="#">About Us</Link>
                </div>
                <div className={styles.contactlink}>
                  <Link href="#">Contact Us</Link>
                </div>
              </div>
              <div className={styles.socials}>
                <div className={styles.socialimage1}>
                  <Link href="#">
                    <Image src={social} alt="socials" width={30} height={30} />
                  </Link>
                </div>
                <div className={styles.socialimage2}>
                  <Image src={social1} alt="socials1" width={30} height={30} />
                </div>
                <div className={styles.socialimage3}>
                  <Image src={social2} alt="socials2" width={30} height={30} />
                </div>
                <div className={styles.socialimage4}>
                  <Image src={social3} alt="socials3" width={30} height={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
