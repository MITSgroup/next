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
  // function debug2(projects) {
  //   console.log('123' + JSON.stringify(projects,null,4));
  // }
  
  // debug2(projects[0].attributes.thumbnailHome.data.attributes.url);
  // function thumbnailHome(thumb, thumb2){
  //   console.log('test: '+JSON.stringify(thumb,null,4));
  //   let thumb3 = thumb.data.attributes.formats.medium.url;
  //   if ( thumb3 != null) {
  //     return thumb3;
  //   } else {
  //     return thumb2;
  //   }
  // };
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
                <Grid item xs={24} md={12} lg={GridLg(project.attributes.gridLg)} key={project.id}>
                  <ProjectCard
                    url={`projects/${project.attributes.slug}`}
                    image={ project.attributes.thumbnailHome.data.attributes.url} //thumbnailHome(project.attributes.thumbnailHome, project.attributes.thumbnail.data.attributes.formats.medium.url) }
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
                <Grid item xs={24} md={12} lg={GridLg(project.attributes.gridLg)} key={project.id}>
                  <ProjectCard
                    url={`portfolio/${project.attributes.slug}`}
                    image={ project.attributes.thumbnailHome.data.attributes.url
                      //thumbnailHome(project.attributes.thumbnailHome,project.attributes.thumbnail.data.attributes.formats.medium.url) 
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
