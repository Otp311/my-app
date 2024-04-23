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
                <strong>Peanut Butter Cream</strong>
                <p>Always pulled as a double, unless specified.</p>
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
                <strong>Peanut Butter Cream</strong>
                <p>Always pulled as a double, unless specified.</p>
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
                <strong>Peanut Butter Cream</strong>
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
                <strong>Peanut Butter Cream</strong>
                <p>Always pulled as a double, unless specified.</p>
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
                <strong>Peanut Butter Cream</strong>
                <p>A rotating selection of single origin drip coffee.</p>
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
                <strong>Peanut Butter Cream</strong>
                <p>A rotating selection of single origin drip coffee.</p>
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
                <strong>Peanut Butter Cream</strong>
                <p>A rotating selection of single origin drip coffee.</p>
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
                <strong>Peanut Butter Cream</strong>
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
                <strong>Peanut Butter Cream</strong>
                <p>A rotating selection of single origin drip coffee.</p>
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
                <strong>Peanut Butter Cream</strong>
                <p>Always pulled as a double, unless specified.</p>
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
                <strong>Peanut Butter Cream</strong>
                <p>Always pulled as a double, unless specified.</p>
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
                <strong>Peanut Butter Cream</strong>
                <p>Always pulled as a double, unless specified.</p>
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
                <strong>Peanut Butter Cream</strong>
                <p>Always pulled as a double, unless specified.</p>
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
                <strong>Peanut Butter Cream</strong>
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
                <strong>Peanut Butter Cream</strong>
                <p>Always pulled as a double, unless specified.</p>
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
                  src={cafe16}
                  alt="cafe16"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className={styles.boxcontent}>
                <strong>Peanut Butter Cream</strong>
                <p>A rotating selection of single origin drip coffee.</p>
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
                <strong>Peanut Butter Cream</strong>
                <p>A rotating selection of single origin drip coffee.</p>
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
                <strong>Peanut Butter Cream</strong>
                <p>A rotating selection of single origin drip coffee.</p>
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
                <strong>Peanut Butter Cream</strong>
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
                <strong>Peanut Butter Cream</strong>
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
                <strong>Peanut Butter Cream</strong>
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
                <strong>Peanut Butter Cream</strong>
                <p>A rotating selection of single origin drip coffee.</p>
                <i>
                  <span>₱125.00</span>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
