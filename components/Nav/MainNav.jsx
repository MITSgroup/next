import styles from "./Nav.module.scss";
import React from "react";

import Link from "next/link";

const MainNav = ({ transparent }) => {
  return (
    <nav className={`${styles.mainNav} ${transparent ? styles.navLight : ""} `}>
      <ul>
        <li>
          <Link href={"/about"}>About us</Link>
        </li>
        <li>
          <Link href={"/projects"}>PROJECTS</Link>
        </li>
        <li>
          <Link href={"/posts"}>JOURNAL</Link>
        </li>
        <li>
          <Link
            className={`${styles.linkContacts} ${
              transparent ? styles.linkContactsWhite : ""
            }`}
            href={"/contacts"}
            >
            CONTACT US
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
