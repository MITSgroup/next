import styles from "./ProjectModels.module.scss";
import React from "react";

import { Container, Grid, Box } from "@mui/material";

function myModel (model) {
  let myModel = JSON.parse(model);
  if(myModel.blocks[0].data.html) {
    return myModel.blocks[0].data.html;
  }
}

const ProjectModels = ({ items }) => {
  return (
    <Box className={styles.projectModels}>
      <Container>
              {items &&
                items.map((item) => (
                    <Box  dangerouslySetInnerHTML={{__html: myModel(item.value)}}>
                      {/* {item.value.block?.data.html} */}
                      {/* {console.log(JSON.parse(item.value))} */}
                      {/* {console.log('123:',myModel(item.value))} */}
                      
                    </Box>
                ))}
      </Container>
    </Box>
  );
};

export default ProjectModels;
