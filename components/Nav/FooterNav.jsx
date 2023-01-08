import styles from "./Nav.module.scss";
import React from "react";

import Link from "next/link";

const FooterNav = ({ social }) => {
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
