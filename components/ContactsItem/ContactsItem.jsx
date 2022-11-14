import styles from "./ContactsItem.module.scss";
import React from "react";
import { Container, Grid, Typography, Box } from "@mui/material";
import ReviewItem from "../ReviewItem/ReviewItem";
import MainForm from "../Forms/MainForm";
import Link from "next/link";

const ContactsItem = ({ icon, title, textLink, link }) => {
  const renderIcon = (param) => {
    switch (param) {
      case "location":
        return (
          <svg
            width="16"
            height="20"
            viewBox="0 0 16 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.99872 10.093C9.52813 10.093 10.768 8.90575 10.768 7.44115C10.768 5.97654 9.52813 4.78925 7.99872 4.78925C6.46932 4.78925 5.22949 5.97654 5.22949 7.44115C5.22949 8.90575 6.46932 10.093 7.99872 10.093Z"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.0911 14.2985L9.2724 18.4303C8.93489 18.7951 8.47733 19 8.00025 19C7.52318 19 7.06562 18.7951 6.72811 18.4303L2.90851 14.2985C1.90161 13.2091 1.21591 11.821 0.938127 10.3098C0.660343 8.7987 0.802949 7.23237 1.34791 5.80892C1.89287 4.38547 2.81571 3.16884 3.99974 2.31286C5.18376 1.45688 6.5758 1 7.9998 1C9.42381 1 10.8158 1.45688 11.9999 2.31286C13.1839 3.16884 14.1067 4.38547 14.6517 5.80892C15.1967 7.23237 15.3393 8.7987 15.0615 10.3098C14.7837 11.821 14.098 13.2091 13.0911 14.2985V14.2985Z"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "phone":
        return (
          <svg
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_149_742)">
              <path
                d="M2.6572 1.26666H6.42863L8.31434 6.24285L5.9572 7.73571C6.96696 9.8969 8.62404 11.646 10.6715 12.7119L12.0858 10.2238L16.8001 12.2143V16.1952C16.8001 16.7231 16.6014 17.2294 16.2477 17.6027C15.8941 17.976 15.4145 18.1857 14.9143 18.1857C11.2365 17.9498 7.76763 16.3012 5.16221 13.5511C2.55679 10.8009 0.994988 7.1393 0.771484 3.25714C0.771484 2.72923 0.970157 2.22295 1.3238 1.84966C1.67744 1.47637 2.15708 1.26666 2.6572 1.26666"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_149_742">
                <rect width="18" height="19" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      case "email":
        return (
          <svg
            width="22"
            height="19"
            viewBox="0 0 22 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_149_745)">
              <path
                d="M18.7778 1H3.22222C1.99492 1 1 2.08731 1 3.42857V15.5714C1 16.9127 1.99492 18 3.22222 18H18.7778C20.0051 18 21 16.9127 21 15.5714V3.42857C21 2.08731 20.0051 1 18.7778 1Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M1 3L11 11L21 3"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_149_745">
                <rect width="22" height="19" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      case "instagram":
        return (
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_155_45)">
              <path
                d="M16.042 0.916687H5.95866C3.17422 0.916687 0.916992 3.17392 0.916992 5.95835V16.0417C0.916992 18.8261 3.17422 21.0834 5.95866 21.0834H16.042C18.8264 21.0834 21.0837 18.8261 21.0837 16.0417V5.95835C21.0837 3.17392 18.8264 0.916687 16.042 0.916687Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 14.7812C13.0883 14.7812 14.7812 13.0883 14.7812 11C14.7812 8.91167 13.0883 7.21875 11 7.21875C8.91167 7.21875 7.21875 8.91167 7.21875 11C7.21875 13.0883 8.91167 14.7812 11 14.7812Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.6719 5.32812V5.32912"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_155_45">
                <rect width="22" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      case "linkedin":
        return (
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.1176 1.50983H3.88231C2.57199 1.50983 1.50977 2.57205 1.50977 3.88238V18.1177C1.50977 19.428 2.57199 20.4902 3.88231 20.4902H18.1176C19.4279 20.4902 20.4902 19.428 20.4902 18.1177V3.88238C20.4902 2.57205 19.4279 1.50983 18.1176 1.50983Z"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.25488 9.81372V15.7451"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.25488 6.25488V6.26621"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11 15.7451V9.81372"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.7451 15.7451V12.1863C15.7451 11.557 15.4951 10.9536 15.0502 10.5086C14.6053 10.0637 14.0018 9.81372 13.3725 9.81372C12.7433 9.81372 12.1398 10.0637 11.6949 10.5086C11.25 10.9536 11 11.557 11 12.1863"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "facebook":
        return (
          <svg
            width="14"
            height="22"
            viewBox="0 0 14 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_155_50)">
              <path
                d="M0.530273 8.62747V13.3726H4.03027V21.6765H8.69694V13.3726H12.1969L13.3636 8.62747H8.69694V6.25492C8.69694 5.9403 8.81986 5.63857 9.03865 5.4161C9.25744 5.19363 9.55419 5.06865 9.86361 5.06865H13.3636V0.323547H9.86361C8.31651 0.323547 6.83278 0.948458 5.73882 2.06081C4.64486 3.17315 4.03027 4.68182 4.03027 6.25492V8.62747H0.530273Z"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_155_50">
                <rect width="14" height="22" fill="white" />
              </clipPath>
            </defs>
          </svg>
        );
      default:
        return <div></div>;
    }
  };

  return (
    <Link href={link}>
      <a className={styles.contactsItem}>
        <i className={styles.icon}>{renderIcon(icon)}</i>
        <h4 className={styles.title}>{title}</h4>
        {textLink && <p className={styles.textLink}>{textLink}</p>}
      </a>
    </Link>
  );
};

export default ContactsItem;
