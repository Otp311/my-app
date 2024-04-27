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
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -100 }}
        transition={{ duration: 0.5 }}
        className={`${style.navLinks} ${isOpen ? "open" : ""}`}
      >
        <li>
          <Link href="/" passHref>
            <motion.div onClick={toggleMenu} whileHover={{ scale: 1.1 }}>
              Home
            </motion.div>
          </Link>
        </li>
        <li>
          <Link href="/menu">Menun</Link>
        </li>
        <li>
          <Link href="/about" passHref>
            <motion.div onClick={toggleMenu} whileHover={{ scale: 1.1 }}>
              About
            </motion.div>
          </Link>
        </li>
        <li>
          <Link href="/services" passHref>
            <motion.div onClick={toggleMenu} whileHover={{ scale: 1.1 }}>
              Contact Us
            </motion.div>
          </Link>
        </li>
      </motion.ul>
    </nav>
  );
};

export default NavBar;
