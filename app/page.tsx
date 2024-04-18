import React from "react";

import styles from "./styles.module.css";
import LinkComponent from "./compponents/Links";
import Footer from "./links/footer";
import Image from "next/image";
import imageone from "../public/imageone.jpg";
import imagetwo from "../public/imagetwo.jpg";
import imagethree from "../public/imagethree.jpg";
import imagefour from "../public/imagefour.jpg";
import ViewMore from "./compponents/view";
import OrderNow from "./compponents/orderNow";
import about from "../public/about.jpg";
import cone from "../public/cone.jpg";
import Carousel from "./compponents/carousel";
import Link from "next/link";
import menu from "../public/menu.jpg";
import menu2 from "../public/menu (2).jpg";
import menu3 from "../public/menu (3).jpg";

const HomePage = () => {
  return (
    <body className={styles.body}>
      <div className={styles.container}>
        <div>
          <LinkComponent />
        </div>

        <div className={styles.TitlePage}>
          <div className={styles.Text}>
            <h2 className={styles.title}>Hype Up</h2>
            <h2 className={styles.title}>Cafe</h2>
          </div>
        </div>

        <div className={styles.Carousel}>
          <div className={styles.offer}>
            <span>What We Offer</span>
          </div>

          <div className={styles.products}>
            <div className={styles.box}>
              <Image
                src={imageone}
                alt="imageone"
                style={{
                  height: "80%",
                }}
              />
              <p style={{ fontSize: "15px", margin: "0 0 0 10px" }}>
                Peanut Butter Cream
              </p>

              <div className={styles.order}>
                <OrderNow />
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src={imagetwo}
                alt="imagetwo"
                style={{
                  height: "80%",
                }}
              />
              <p style={{ fontSize: "15px", margin: "0 0 0 10px" }}>
                Mocha Latte
              </p>

              <div className={styles.order}>
                <OrderNow />
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src={imagethree}
                alt="imagethree"
                sizes="100%"
                style={{
                  height: "80%",
                }}
              />
              <p style={{ fontSize: "15px", margin: "0 0 0 10px" }}>
                Mocha Latte
              </p>

              <div className={styles.order}>
                <OrderNow />
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src={imagefour}
                alt="imagefour"
                style={{
                  height: "80%",
                }}
              />
              <p style={{ fontSize: "15px", margin: "0 0 0 10px" }}>
                Smores Latte
              </p>

              <div className={styles.order}>
                <OrderNow />
              </div>
            </div>
          </div>

          <div className={styles.ViewMore}>
            <ViewMore />
          </div>
        </div>

        <div className={styles.promo}>
          <div>
            <Carousel />
          </div>
        </div>

        <div className={styles.blog}>
          <main>
            <div className={styles.about1}>
              <h2>About Us</h2>
            </div>
            <div className={styles.aboutus}>
              <Image className={styles.aboutusimage} src={about} alt="about" />
              <div className={styles.blogs}>
                <div className={styles.blogtitle}>
                  <strong>Hype Up Cafe</strong>
                </div>
                <p>
                  We're not just about serving a great cup of coffee (though we
                  do that exceptionally well!). Hype Up Coffee is a place to
                  connect, unwind, and find that extra spark of inspiration.
                  Whether you're a neighborhood regular or just passing through,
                  we want you to feel the energy. Our expert baristas craft
                  every drink with care and a whole lot of passion. Come for the
                  coffee, stay for the vibe. Coffee is our craft. From sourcing
                  the finest beans to perfecting our brewing techniques, we're
                  all about pushing boundaries to deliver the most flavorful and
                  exciting cup possible. We believe in the power of a perfect
                  espresso, a velvety latte, or an artfully prepared cold brew
                  to transform your day. Hype Up Coffee is where coffee lovers
                  become coffee connoisseurs.{" "}
                  <Link className={styles.linkmore} href="#">
                    Learn More
                  </Link>
                </p>
              </div>
            </div>
          </main>
        </div>

        <div className={styles.menuimages}>
          <div className={styles.more}>
            <h3>Want More?</h3>
          </div>
          <div className={styles.Menu}>
            <Image src={menu} alt="menu" />

            <Image src={menu2} alt="menu2" />

            <Image src={menu3} alt="menu3" />
          </div>
        </div>

        <div className={styles.Footer}>
          <Footer />
        </div>
      </div>
    </body>
  );
};

export default HomePage;
