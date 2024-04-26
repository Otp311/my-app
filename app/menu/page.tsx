"use client";

import React from "react";
import styles from "./menu.module.css";
import Navbar from "../components/Links";
import Image from "next/image";
import cafe3 from "/public/cafe3.jpg";
import cafe2 from "/public/cafe2.png";
import cafe1 from "/public/cafe1.png";
import cafe from "/public/cafe.png";
import cafe4 from "/public/cafe4.png";
import cafe5 from "/public/cafe5.png";
import cafe6 from "/public/cafe6.png";
import cafe7 from "/public/cafe7.jpeg";
import cafe9 from "/public/cafe9.png";
import cafe10 from "/public/cafe10.png";
import cafe11 from "/public/cafe11.png";
import cafe12 from "/public/cafe12.png";
import cafe13 from "/public/cafe13.png";
import cafe14 from "/public/cafe14.jpeg";
import cafe15 from "/public/cafe15.png";
import cafe16 from "/public/cafe16.png";
import cafe17 from "/public/cafe17.jpeg";
import cafe18 from "/public/cafe18.png";
import cafe19 from "/public/cafe19.jpeg";
import cafe20 from "/public/cafe20.png";
import cafe21 from "/public/cafe21.jpeg";
import cafe22 from "/public/cafe22.jpeg";
import Footer from "../components/footer";
import classicburger from "/public/classicburger.jpg";
import cheeseburger from "/public/cheeseburger.jpg";
import hypeburger from "/public/hypeburger.jpg";
import grilledsandwich from "/public/grilledsandwich.jpg";
import hamandcheese from "/public/hamandcheese.jpg";
import pepperoni from "/public/pepperoni.jpg";
import hamandegg from "/public/hamandegg.jpg";
import burger1 from "/public/burger1.webp";
import glazeddonuts from "/public/glazeddonuts.jpg";
import assorteddonuts from "/public/assorteddonuts.jpg";
import classiicwaffle from "/public/classiicwaffle.jpg";
import bel1waffle from "/public/bel1waffle.jpg";
import belwaffle from "/public/belwaffle.jpg";

const Menu = () => {
  return (
    <div className={styles.container}>
      <div>
        <Navbar />
      </div>

      <div className={styles.productWrapper}>
        <div className={styles.imgContainer}>
          <div className={styles.title}>Coffee Beverages</div>

          <div className={styles.product}>
            <div className={styles.box}>
              <div className="relative w-20 h-20">
                <Image
                  className={styles.image}
                  src="/imageone.jpg"
                  alt="imageone"
                  layout="fill"
                />
              </div>
              <div className={styles.boxcontent}>
                <strong>Peanut Butter Cream</strong>
                <p>Always pulled as a double, unless specified.</p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative w-20 h-20">
                <Image src="/icedcoffee.png" alt="icedcoffee" layout="fill" />
              </div>
              <div className={styles.boxcontent}>
                <strong>Iced Americano 16 oz.</strong>
                <p>Double shot of espreso, water. Served over ice.</p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative w-20 h-20">
                <Image src="/imagethree.jpg" alt="imagethree" layout="fill" />
              </div>
              <div className={styles.boxcontent}>
                <strong>Iced Cortado</strong>
                <p>
                  Equal parts: double espreso shot to milk. Serves over ice.
                </p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative w-20 h-20">
                <Image src="/imagefour.jpg" alt="imagefour" layout="fill" />
              </div>
              <div className={styles.boxcontent}>
                <strong>Peanut Butter Cream</strong>
                <p>Always pulled as a double, unless specified.</p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative w-20 h-20">
                <Image src={cafe} alt="cafe" layout="fill" />
              </div>
              <div className={styles.boxcontent}>
                <strong>Latte</strong>
                <p>Always pulled as a double, unless specified.</p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative w-20 h-20">
                <Image src={cafe1} alt="cafe1" layout="fill" />
              </div>
              <div className={styles.boxcontent}>
                <strong>Cortado</strong>
                <p>
                  Equal parts of double espreso shot: silky, steamed milk of
                  choice.
                </p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative w-20 h-20">
                <Image src={cafe2} alt="cafe2" layout="fill" />
              </div>
              <div className={styles.boxcontent}>
                <strong>Peanut Butter Cream</strong>
                <p>Always pulled as a double, unless specified.</p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative h-20 w-20">
                <Image
                  src={cafe3}
                  alt="cafe3"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.boxcontent}>
                <strong>Cold Brew Iced Coffee</strong>
                <p>
                  Slow brewed with cold water for 16 hours, creating a smooth
                  and rich flavored brew
                </p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative h-20 w-20">
                <Image
                  src={cafe4}
                  alt="cafe4"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.boxcontent}>
                <strong>Iced Cortado</strong>
                <p>Equal parts of double espreso shot.</p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative h-20 w-20">
                <Image
                  src={cafe5}
                  alt="cafe5"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.boxcontent}>
                <strong> Iced Macchiato</strong>
                <p>Double espreso shot, topped with small amount os steamed</p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative h-20 w-20">
                <Image
                  src={cafe6}
                  alt="cafe6"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.boxcontent}>
                <strong>Macchiato</strong>
                <p>A rotating selection of single origin drip coffee.</p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative h-20 w-20">
                <Image
                  src={cafe7}
                  alt="cafe7"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.boxcontent}>
                <strong>Cappuccino</strong>
                <p>Double shot of espresso, silky foamed milk of choice.</p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <div className={styles.title}>Other Beverages</div>

          <div className={styles.product}>
            <div className={styles.box}>
              <div className="relative w-20 h-20">
                <Image
                  className={styles.image}
                  src={cafe9}
                  alt="cafe9"
                  layout="fill"
                />
              </div>
              <div className={styles.boxcontent}>
                <strong>Espreso Over Ice</strong>
                <p>Double shot of espresso, water,. Served over ice.</p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative w-20 h-20">
                <Image src={cafe10} alt="cafe10" layout="fill" />
              </div>
              <div className={styles.boxcontent}>
                <strong>Matcha Green Tea Latte</strong>
                <p>Kettl ceremonial-grade matcha. milk,served over iced.</p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative w-20 h-20">
                <Image src={cafe11} alt="cafe11" layout="fill" />
              </div>
              <div className={styles.boxcontent}>
                <strong>Iced Latte 16 oz.</strong>
                <p>Double shot of espresso, milk, water, served over ice.</p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative w-20 h-20">
                <Image src={cafe12} alt="cafe12" layout="fill" />
              </div>
              <div className={styles.boxcontent}>
                <strong>Iced Mocha</strong>
                <p>Double shot of espresso, chocolate,milk, served over ice.</p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative w-20 h-20">
                <Image src={cafe13} alt="cafe13" layout="fill" />
              </div>
              <div className={styles.boxcontent}>
                <strong>Iced Matcha Latte 16 oz.</strong>
                <p>Always pulled as a double, unless specified.</p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative w-20 h-20">
                <Image src={cafe14} alt="cafe14" layout="fill" />
              </div>
              <div className={styles.boxcontent}>
                <strong>Cappucino</strong>
                <p>Double shot of espresso, silky foamed milk of choice.</p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative w-20 h-20">
                <Image src={cafe15} alt="cafe15" layout="fill" />
              </div>
              <div className={styles.boxcontent}>
                <strong>Iced Chai 16 oz.</strong>
                <p>Always pulled as a double, unless specified.</p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative h-20 w-20">
                <Image
                  src={cafe16}
                  alt="cafe16"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.boxcontent}>
                <strong>Iced Mocha</strong>
                <p>
                  ADouble shot of espressso, chocolate, milk, served over ice.
                </p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative h-20 w-20">
                <Image
                  src={cafe17}
                  alt="cafe17"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.boxcontent}>
                <strong>Iced Golden Turmeric Latte</strong>
                <p>Golden turmeric tonic powder, milk. Served over ice.</p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative h-20 w-20">
                <Image
                  src={cafe18}
                  alt="cafe18"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.boxcontent}>
                <strong>Hot Chocolate</strong>
                <p>Dark Chocolate, topped with Cocoa powder.</p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative h-20 w-20">
                <Image
                  src={cafe19}
                  alt="cafe19"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.boxcontent}>
                <strong>Seasonal Drink Special</strong>
                <p>A rotating selection of single origin drip coffee.</p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative h-20 w-20">
                <Image
                  src={cafe20}
                  alt="cafe20"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.boxcontent}>
                <strong>Americano</strong>
                <p>A rotating selection of single origin drip coffee.</p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative h-20 w-20">
                <Image
                  src={cafe21}
                  alt="cafe21"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.boxcontent}>
                <strong>Iced Capp/Flat White</strong>
                <p>A rotating selection of single origin drip coffee.</p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative h-20 w-20">
                <Image
                  src={cafe22}
                  alt="cafe22"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.boxcontent}>
                <strong>
                  Farmacy x The ELK - Soothing Honey Oat Milk Latte
                </strong>
                <p>Chamomile, honey espresso, oat milk, cinnamon</p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <div className={styles.title}>Burgers</div>

          <div className={styles.product}>
            <div className={styles.box}>
              <div className="relative w-20 h-20">
                <Image src={classicburger} alt="classicburger" layout="fill" />
              </div>
              <div className={styles.boxcontent}>
                <strong>Classic Burger</strong>

                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative w-20 h-20">
                <Image src={cheeseburger} alt="cheeseburger" layout="fill" />
              </div>
              <div className={styles.boxcontent}>
                <strong>Cheese Burger</strong>

                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative w-20 h-20">
                <Image src={burger1} alt="burger1" layout="fill" />
              </div>
              <div className={styles.boxcontent}>
                <strong>Hype Burger</strong>

                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative w-20 h-20">
                <Image src={hypeburger} alt="hypeburger" layout="fill" />
              </div>
              <div className={styles.boxcontent}>
                <strong>Regular Burger</strong>

                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <div className={styles.title}>Sandwiches</div>

          <div className={styles.product}>
            <div className={styles.box}>
              <div className="relative w-20 h-20">
                <Image
                  src={grilledsandwich}
                  alt="grilledsandwich"
                  layout="fill"
                />
              </div>
              <div className={styles.boxcontent}>
                <strong>Grilled Cheese</strong>

                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative w-20 h-20">
                <Image src={hamandcheese} alt="hamandcheese" layout="fill" />
              </div>
              <div className={styles.boxcontent}>
                <strong>Ham and Cheese</strong>

                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative w-20 h-20">
                <Image src={pepperoni} alt="pepperoni" layout="fill" />
              </div>
              <div className={styles.boxcontent}>
                <strong>Pepperoni & Cheese</strong>

                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative h-20 w-20">
                <Image
                  src={hamandegg}
                  alt="hamandegg"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.boxcontent}>
                <strong>Ham and Egg</strong>

                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <div className={styles.title}>Donuts & Waffles</div>

          <div className={styles.product}>
            <div className={styles.box}>
              <div className="relative w-20 h-20">
                <Image src={glazeddonuts} alt="glazeddonuts" layout="fill" />
              </div>
              <div className={styles.boxcontent}>
                <strong>Glazed Mini Donuts</strong>

                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative w-20 h-20">
                <Image
                  src={assorteddonuts}
                  alt="assorteddonuts"
                  layout="fill"
                />
              </div>
              <div className={styles.boxcontent}>
                <strong>Assorted Mini Donuts</strong>

                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative w-20 h-20">
                <Image src={classiicwaffle} alt="classicwaffle" layout="fill" />
              </div>
              <div className={styles.boxcontent}>
                <strong>Classic Waffle</strong>

                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative h-20 w-20">
                <Image
                  src={bel1waffle}
                  alt="bel1waffle"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.boxcontent}>
                <strong>Belgian Liege Waffle</strong>

                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <div className="relative h-20 w-20">
                <Image
                  src={belwaffle}
                  alt="belwaffle"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.boxcontent}>
                <strong>Belgian Liege Waffle</strong>

                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Menu;
