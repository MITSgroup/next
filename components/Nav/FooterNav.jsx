import styles from "./Nav.module.scss";
import React from "react";
import { useRouter } from "next/router";

import Link from "next/link";

const FooterNav = ({ social }) => {
  const router = useRouter();

  return (
    <nav className={styles.footerNav}>
      <ul>
        <li>
          <Link href={"/about"}>{router.locale === "en" ? "About us" : "О нас"}</Link>
        </li>
        <li>
          <Link href={"/projects"}>{router.locale === "en" ? "PROJECTS" : "Проекты"}</Link>
        </li>
        <li>
          <Link href={"/posts"}>{router.locale === "en" ? "JOURNAL" : "Блог"}</Link>
        </li>
        {social?.attributes.instagramLink && (
          <li>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={social.attributes.instagramLink}
            >
              INSTAGRAM
            </a>
          </li>
        )}

        {social?.attributes.facebookLink && (
          <li>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={social.attributes.facebookLink}
            >
              facebook
            </a>
          </li>
        )}

        {social?.attributes.linkedinLink && (
          <li>
            <a
              target={"_blank"}
              rel={"noreferrer"}
              href={social.attributes.linkedinLink}
            >
              linkedin
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default FooterNav;
