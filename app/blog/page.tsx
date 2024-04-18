import React from "react";
import styles from "./blog.module.css";
import LinkComponent from "../compponents/Links";
import Image from "next/image";
import Link from "next/link";
import FooterLinks from "../links/footerlinks";

const Blog = () => {
  return (
    <div className={styles.container}>
      <div>
        <LinkComponent />
      </div>

      <div className={styles.contentimg}>
        <Image
          src="/background.jpg"
          alt="background"
          width={1400}
          height={900}
        />
      </div>

      <div className={styles.aboutus}>
        <div className={styles.titlepage}>
          <h3>About Us</h3>
        </div>

        <div className={styles.textpage}>
          <p>
            We're not just about serving a great cup of coffee (though we do
            that exceptionally well!). Hype Up Coffee is a place to connect,
            unwind, and find that extra spark of inspiration. Whether you're a
            neighborhood regular or just passing through, we want you to feel
            the energy. Our expert baristas craft every drink with care and a
            whole lot of passion. Come for the coffee, stay for the vibe. Coffee
            is our craft. From sourcing the finest beans to perfecting our
            brewing techniques, we're all about pushing boundaries to deliver
            the most flavorful and exciting cup possible. We believe in the
            power of a perfect espresso, a velvety latte, or an artfully
            prepared cold brew to transform your day. Hype Up Coffee is where
            coffee lovers become coffee connoisseurs.
          </p>

          <div className={styles.aboutimage}>
            <Image src="/bg.jpg" alt="bg" width={500} height={900} />
          </div>
        </div>
      </div>

      <div className={styles.humblebeginning}>
        <div className={styles.humb}>
          <h2>Our Humble Beginning</h2>
        </div>
        <div className={styles.timeline}>
          <div className={styles.humbleimage}>
            <Image
              src="/owners.jpg"
              alt="background"
              width={600}
              height={900}
            />
          </div>
          <div className={styles.humblepage}>
            <h4>Our Story: From a Dream to Your Daily Brew</h4>

            <p>
              Hype Up Cafe wasn't born in a sleek corporate office or designed
              by a team of marketing whizzes. It started with a simple love of
              coffee, a whole lot of determination, and a slightly battered
              espresso machine. We've always believed that a great cup of coffee
              can do more than just wake you up. It can spark conversations,
              inspire ideas, and fuel those moments that make life a little
              sweeter. We wanted to create a space where people could find their
              perfect cup and a whole lot of good vibes to go with it. In the
              beginning, it was just a few friends, a tiny space, and countless
              hours experimenting with beans, roasts, and brewing techniques.
              We'd taste, tweak, and try again, driven by the dream of serving
              coffee so delicious you'd actually savor your morning alarm. Our
              first customers weren't just patrons; they were our cheerleaders,
              our guinea pigs, and our inspiration. Their feedback helped us
              refine our brews, expand our menu, and find the flavors that truly
              resonated with our community. Slowly but surely, Hype Up Cafe
              transformed from a passion project into a neighborhood favorite.
              We're so proud of how far we've come, but we also know this
              journey is just beginning. We're committed to always sourcing the
              finest ingredients, exploring new flavor profiles, and making your
              Hype Up Cafe experience even better with every visit. So, next
              time you sip your latte or savor a perfectly brewed pour-over,
              remember it all started with a big dream and a love of really
              great coffee. Thank YOU for being a part of our story!
            </p>
          </div>
        </div>
      </div>

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
    </div>
  );
};

export default Blog;
