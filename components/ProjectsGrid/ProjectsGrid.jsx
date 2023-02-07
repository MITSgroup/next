import React from "react";
import styles from "./ProjectsGrid.module.scss";
import { Grid, Collapse, useMediaQuery, Button, Box } from "@mui/material";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsGrid = ({ projects, portfolio }) => {
  const matchesMd = useMediaQuery("(min-width: 768px)");
  const matchesLg = useMediaQuery("(min-width: 1200px)");
  function GridLg(gridLg){
    if (gridLg != null) {
      return gridLg;
    } else {
      return '8';
    }
  };
  function debug2(projects) {
    let mytest = 'https://' + projects[0].attributes.thumbnail.data.attributes.url;
    console.log('123' + mytest);
  }
  
  debug2(projects);

  return (
    <>
      <Box>
        <Grid container columns={24}>
          {projects &&
            projects
              .sort((a, b) =>
                a.attributes.position > b.attributes.position
                  ? 1
                  : b.attributes.position > a.attributes.position
                  ? -1
                  : 0
              )
              .map((project) => (
                <Grid item xs={12} md={6} lg={4} key={project.id}>
                  <ProjectCard
                    url={`projects/${project.attributes.slug}`}
                    image={
                      project.attributes.thumbnail.data.attributes.formats
                        .medium.url
                    }
                    title={project.attributes.name}
                    locationName={project.attributes.locationName}
                    description={project.attributes.description}
                    label
                    left={project.attributes.hero.projectLeft}
                    type={project.attributes.hero.projectType}
                  />
                </Grid>
              ))}

          {portfolio &&
            portfolio
              .sort((a, b) =>
                a.attributes.position > b.attributes.position
                  ? 1
                  : b.attributes.position > a.attributes.position
                  ? -1
                  : 0
              )
              .map((project) => (
                <Grid item xs={12} md={6} lg={4} key={project.id}>
                  <ProjectCard
                    url={`portfolio/${project.attributes.slug}`}
                    image={
                      project.attributes.thumbnail.data.attributes.formats
                        .medium.url
                    }
                    title={project.attributes.name}
                    locationName={project.attributes.locationName}
                    description={project.attributes.description}
                  />
                </Grid>
              ))}
        </Grid>
      </Box>
    </>
  );
};

export default ProjectsGrid;
