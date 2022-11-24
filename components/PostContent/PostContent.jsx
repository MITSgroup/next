import styles from "./PostContent.module.scss";
import React from "react";
import parse from "html-react-parser";
import { Container, Grid, Box, Typography } from "@mui/material";
import Image from "next/image";

const PostContent = ({ content }) => {
  const [blocks, setBlocks] = React.useState([]);

  React.useEffect(() => {
    const contentData = JSON.parse(content);
    contentData ? setBlocks(contentData.blocks) : null;
  }, []);

  const renderBlocks = (block) => {
    switch (block.type) {
      case "header":
        const level = block.data?.level;
        return level === 1 ? (
          <h1 className={styles.title}>{block.data?.text}</h1>
        ) : level === 2 ? (
          <h2 className={styles.title}>{block.data?.text}</h2>
        ) : level === 3 ? (
          <h3 className={styles.title}>{block.data?.text}</h3>
        ) : level === 4 ? (
          <h4 className={styles.title}>{block.data?.text}</h4>
        ) : level === 5 ? (
          <h5 className={styles.title}>{block.data?.text}</h5>
        ) : (
          <h6 className={styles.title}>{block.data?.text}</h6>
        );
      case "paragraph":
        return (
          <Grid container justifyContent={"center"}>
            <Grid item xs={12} md={10} lg={8}>
              <p className={styles.text}>{parse(block.data?.text)}</p>{" "}
            </Grid>
          </Grid>
        );
      case "image":
        return (
          <Box mb={2} className={styles.image}>
            <Image
              src={block.data?.file.url}
              width={block.data?.file?.width}
              height={block.data?.file?.height}
              alt={block.data?.file?.alt}
              sizes="100vw"
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <Typography className={styles.caption}>
              {block.data?.caption}
            </Typography>
          </Box>
        );
      case "list":
        return (
          <ul className={styles.list}>
            {block.data?.items.map((item, index) => (
              <li key={index}>{parse(item)}</li>
            ))}
          </ul>
        );
      case "warning":
        return (
          <div className={styles.warning}>
            <b>{block.data?.title}</b> <span>{parse(block.data?.message)}</span>
          </div>
        );
      case "code":
        return <code className={styles.code}>{parse(block.data?.code)}</code>;
      case "raw":
        return <pre className={styles.raw}>{block.data?.html}</pre>;
      case "quote":
        return (
          <Grid container justifyContent={"center"}>
            <Grid item xs={12} lg={8}>
              {" "}
              <div className={styles.quote}>
                <span className={styles.quotes}>“</span>
                <blockquote>{parse(block.data?.text)}</blockquote>
                <span>{parse(block.data?.caption)}</span>
              </div>
            </Grid>
          </Grid>
        );
      case "checklist":
        return (
          <ul className={styles.checklist}>
            {block.data.items &&
              block.data?.items.map((item, index) => (
                <li key={index}>{item.text}</li>
              ))}
          </ul>
        );
      case "delimiter":
        return <span className={styles.delimiter}></span>;

      default:
        return <div></div>;
    }
  };

  return (
    <Box className={styles.postContent}>
      <Container>
        {blocks &&
          blocks.map((obj, index) => (
            <Box className={styles.block} key={index}>
              {renderBlocks(obj)}
            </Box>
          ))}
      </Container>
    </Box>
  );
};

export default PostContent;
