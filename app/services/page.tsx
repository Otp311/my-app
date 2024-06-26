"use client";

import React, { useState, useRef } from "react";
import { sendContactForm } from "../services";
import styles from "./contact.module.css";
import Link from "../components/Links";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

const Contact = () => {
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const submitContact = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(e);
    const name = (
      e.currentTarget.elements.namedItem("name") as HTMLInputElement
    ).value;
    const email = (
      e.currentTarget.elements.namedItem("email") as HTMLInputElement
    ).value;
    const comment = (
      e.currentTarget.elements.namedItem("comment") as HTMLTextAreaElement
    ).value;
    const res = await sendContactForm({
      name,
      email,
      comment,
    });
    if (res === 0) {
      setMessage("Thank you for your valuable comment!");
      if (formRef.current) formRef.current.reset();
    } else {
      setMessage("Something went wrong! Please try again");
    }
  };

  return (
    <div className={styles.container}>
      <Link />
      <NavBar />
      <div className={styles.header}>
        <h1>Contact Us</h1>
      </div>
      <div className={styles.content}>
        <div className={styles.textsection}>
          <h3>HELP US HYPE UP YOUR COFFEE EXPERIENCE!</h3>
          <p>
            We&apos;re always looking to make Hype Up Cafe even better. Share
            your thoughts, suggestions, or maybe even your favorite drink combo!
          </p>
        </div>

        <form ref={formRef} className={styles.form} onSubmit={submitContact}>
          <input
            id="name"
            required
            className={styles.input}
            placeholder="Name"
            type="text"
            minLength={3}
            maxLength={25}
          />
          <input
            id="email"
            required
            className={styles.input}
            placeholder="Email Address"
            type="email"
          />
          <textarea
            id="comment"
            required
            className={styles.textarea}
            placeholder="Comment"
            rows={5}
          ></textarea>

          <div className={styles.message}>
            {message && (
              <div className={styles.message}>
                {message}
                <span
                  className={styles.closeIcon}
                  onClick={() => setMessage("")}
                >
                  &times;
                </span>
              </div>
            )}
          </div>

          <button className={styles.button} type="submit">
            Send
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
