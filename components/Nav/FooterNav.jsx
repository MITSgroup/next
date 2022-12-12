import styles from "./Nav.module.scss";
import React from "react";

import Link from "next/link";

const FooterNav = () => {
  return (
    <nav className={styles.footerNav}>
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
          <a
            target={"_blank"}
            rel={"noreferrer"}
            href="https://instagram.com/mits.bali?igshid=YmMyMTA2M2Y="
          >
            INSTAGRAM
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default FooterNav;
