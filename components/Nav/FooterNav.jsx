import styles from "./Nav.module.scss";
import React from "react";

import Link from "next/link";

const FooterNav = () => {
  return (
    <nav className={styles.footerNav}>
      <ul>
        <li>
          <Link href={""}>About us</Link>
        </li>
        <li>
          <Link href={""}>PROJECTS</Link>
        </li>
        <li>
          <Link href={""}>JOURNAL</Link>
        </li>
        <li>
          <Link href={""}>Contact us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
