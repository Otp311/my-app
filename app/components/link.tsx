"use client";

import React from "react";
import Link from "next/link";
import style from "../components/linkstyle.module.css";

const Menu = () => {
  return (
    <div className={style.menu}>
      <Link href="#">View more</Link>
    </div>
  );
};

export default Menu;
