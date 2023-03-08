import styles from "./Nav.module.scss";
import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";


const MainNav = ({ transparent }) => {

  const router = useRouter();
  return (
    <nav className={`${styles.mainNav} ${transparent ? styles.navLight : ""} `}>
      <ul>
        <li>
          <Link href={"/about"}>{router.locale === "en" ? "About us" : "О нас"}</Link>
        </li>
        <li>
          <Link href={"/projects"}>{router.locale === "en" ? "PROJECTS" : "Проекты"}</Link>
        </li>
        <li>
          <Link href={"/posts"}>{router.locale === "en" ? "JOURNAL" : "БЛОГ"}</Link>
        </li>
        {/* <li>
        <Link
            className={`${styles.linkContacts} ${
              transparent ? styles.linkContactsWhite : ""
            }`}
            href={"/contacts"}
            >
            {router.locale === "en" ? "CONTACT US" : "КОНТАКТЫ"}
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default MainNav;
