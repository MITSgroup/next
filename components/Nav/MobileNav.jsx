import styles from "./Nav.module.scss";
import React from "react";
import { useMediaQuery, Grid, Box } from "@mui/material";
import Link from "next/link";

const MobileNav = () => {
  const matches = useMediaQuery("(min-width: 1200px)");

  return <div></div>;
};

export default MobileNav;
