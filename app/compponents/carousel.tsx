'use client'
// components/Carousel.js
import React, { useState, useEffect } from 'react';
import styles from './Carousel.module.css'; // Import CSS module for styling

const slides = ['cone.jpg', 'ctwo.jpg', 'cthree.jpg']; // List of slide images

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(currentSlide => (currentSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []); // Run effect only once on component mount

  return (
    <div className={styles.Ccontainer}>
      <h2>Avail Our Promo</h2>
      <div className={styles.carousel}>
        {slides.map((slide, index) => (
          <img
            key={index}
            src={`/${slide}`} // Update the image path
            alt={`Slide ${index + 1}`}
            className={index === currentSlide ? styles.active : ''}
            style={{
              width: '80%',
              height: '10%',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

