import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import style from "./navbar.module.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className={style.menutoggle} onClick={toggleMenu}>
        <div className={isOpen ? "open" : ""}></div>
        <div className={isOpen ? "open" : ""}></div>
        <div className={isOpen ? "open" : ""}></div>
      </div>
      <motion.ul
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 100 }}
        transition={{ duration: 0.5 }}
        className={`${style.navLinks} ${isOpen ? "open" : ""}`}
      >
        <li>
          <Link href="/" passHref>
            Home
          </Link>
        </li>
        <li>
          <Link href="/menu">Menu</Link>
        </li>
        <li>
          <Link href="/about" passHref>
            About
          </Link>
        </li>
        <li>
          <Link href="/services" passHref>
            Contact Us
          </Link>
        </li>
      </motion.ul>
    </nav>
  );
};

export default NavBar;
