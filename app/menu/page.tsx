"use client";

import React from "react";
import styles from "./menu.module.css";
import Navbar from "../components/Links";
import Image from "next/image";

const Menu = () => {
  return (
    <div className={styles.container}>
      <div>
        <Navbar />
      </div>

      <div className={styles.productWrapper}>
        <div className={styles.products}>
          <div className={styles.product}>
            <div className={styles.box}>
              <Image
                src="/imageone.jpg"
                alt="imageone"
                width={300}
                height={300}
              />

              <div className={styles.boxcontent}>
                <strong>Peanut Butter Cream</strong>
                <i>
                  <p>₱125.00</p>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <Image
                src="/imagetwo.jpg"
                alt="imagetwo"
                width={500}
                height={500}
              />
              <div className={styles.boxcontent}>
                <strong>Peanut Butter Cream</strong>
                <i>
                  <p>₱125.00</p>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <Image
                src="/imagethree.jpg"
                alt="imagethree"
                width={500}
                height={500}
              />
              <div className={styles.boxcontent}>
                <strong>Bong Blanc</strong>
                <i>
                  <p>₱125.00</p>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <Image
                src="/imagefour.jpg"
                alt="imagefour"
                width={500}
                height={500}
              />
              <div className={styles.boxcontent}>
                <strong>Smores Latte</strong>
                <i>
                  <p>₱125.00</p>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <Image
                src="/imagefour.jpg"
                alt="imagefour"
                width={500}
                height={500}
              />
              <div className={styles.boxcontent}>
                <strong>Smores Latte</strong>
                <i>
                  <p>₱125.00</p>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <Image
                src="/imagefour.jpg"
                alt="imagefour"
                width={500}
                height={500}
              />
              <div className={styles.boxcontent}>
                <strong>Smores Latte</strong>
                <i>
                  <p>₱125.00</p>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <Image
                src="/imagefour.jpg"
                alt="imagefour"
                width={500}
                height={500}
              />
              <div className={styles.boxcontent}>
                <strong>Smores Latte</strong>
                <i>
                  <p>₱125.00</p>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <Image
                src="/imagefour.jpg"
                alt="imagefour"
                width={500}
                height={500}
              />
              <div className={styles.boxcontent}>
                <strong>Smores Latte</strong>
                <i>
                  <p>₱125.00</p>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <Image
                src="/imagefour.jpg"
                alt="imagefour"
                width={500}
                height={500}
              />
              <div className={styles.boxcontent}>
                <strong>Smores Latte</strong>
                <i>
                  <p>₱125.00</p>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <Image
                src="/imagefour.jpg"
                alt="imagefour"
                width={500}
                height={500}
              />
              <div className={styles.boxcontent}>
                <strong>Smores Latte</strong>
                <i>
                  <p>₱125.00</p>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <Image
                src="/imagefour.jpg"
                alt="imagefour"
                width={500}
                height={500}
              />
              <div className={styles.boxcontent}>
                <strong>Smores Latte</strong>
                <i>
                  <p>₱125.00</p>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <Image
                src="/imagefour.jpg"
                alt="imagefour"
                width={500}
                height={500}
              />
              <div className={styles.boxcontent}>
                <strong>Smores Latte</strong>
                <i>
                  <p>₱125.00</p>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <Image
                src="/imagefour.jpg"
                alt="imagefour"
                width={500}
                height={500}
              />
              <div className={styles.boxcontent}>
                <strong>Smores Latte</strong>
                <i>
                  <p>₱125.00</p>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <Image
                src="/imagefour.jpg"
                alt="imagefour"
                width={500}
                height={500}
              />
              <div className={styles.boxcontent}>
                <strong>Smores Latte</strong>
                <i>
                  <p>₱125.00</p>
                </i>
              </div>
            </div>

            <div className={styles.box}>
              <Image
                src="/imagefour.jpg"
                alt="imagefour"
                width={100}
                height={100}
              />
              <div className={styles.boxcontent}>
                <strong>Smores Latte</strong>
                <i>
                  <p>₱125.00</p>
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
