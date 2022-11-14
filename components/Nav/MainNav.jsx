import styles from "./Nav.module.scss";
import React from "react";

import Link from "next/link";

const MainNav = ({ transparent }) => {
  return (
    <nav className={`${styles.mainNav} ${transparent ? styles.navLight : ""} `}>
      <ul>
        <li>
          <Link href={"/about"}>
            <a>About us</a>
          </Link>
        </li>
        <li>
          <Link href={"/projects"}>
            <a>PROJECTS</a>
          </Link>
        </li>
        <li>
          <Link href={"/posts"}>
            <a>JOURNAL</a>
          </Link>
        </li>
        <li>
          <Link href={"/posts"}>
            <a>Contact us</a>
          </Link>
        </li>{" "}
      </ul>
    </nav>
  );
};

export default MainNav;
