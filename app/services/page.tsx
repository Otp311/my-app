"use client";

import React, { useState, useRef } from "react";
import { sendContactForm } from "../services";
import styles from "./contact.module.css";

const Contact = () => {
  const [message, setMessage] = useState("");
  const formRef = useRef();
  const submitContact = async (e) => {
    e.preventDefault();
    console.log(e);
    const res = await sendContactForm({
      name: e.target[0].value,
      email: e.target[1].value,
      comment: e.target[2].value,
    });
    if (res == 0) {
      setMessage("Thank you for your valuable comment!");
      formRef.current.reset();
    } else {
      setMessage("Something went wrong! Please try again");
    }
  };

  return (
    <div className={`${styles.container} max-w-2xl text-center`}>
      <h1>Contact Us</h1>
      <div className={styles.message}>
        {message && (
          <div>
            {message}
            <span onClick={() => setMessage("")}>&times;</span>
          </div>
        )}
      </div>
      <form ref={formRef} className={styles.form} onSubmit={submitContact}>
        <input
          id="name"
          required
          className={styles.input}
          placeholder="Name*"
          type="text"
          minLength={3}
          maxLength={25}
        />
        <input
          id="email"
          required
          className={styles.input}
          placeholder="Email Address*"
          type="email"
        />
        <textarea
          id="comment"
          required
          className={styles.textarea}
          placeholder="Comment*"
          rows={5}
        ></textarea>
        <button className={styles.button} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
