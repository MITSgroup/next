import styles from "./Nav.module.scss";
import React from "react";

import Link from "next/link";

const MainNav = ({ transparent }) => {
  return (
    <nav className={`${styles.mainNav} ${transparent && styles.navLight}`}>
      <ul>
        <li>
          <Link href={""}>
            <a>About us</a>
          </Link>
        </li>
        <li>
          <Link href={""}>
            <a>PROJECTS</a>
          </Link>
        </li>
        <li>
          <Link href={""}>
            <a>JOURNAL</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
