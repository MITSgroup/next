import React from "react";
import { Grid } from "@mui/material";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsGrid = ({ projects, portfolio }) => {
  return (
    <Grid container>
      {projects &&
        projects.map((project) => (
          <Grid item xs={12} md={6} lg={4} key={project.id}>
            <ProjectCard
              url={`projects/${project.attributes.slug}`}
              image={
                project.attributes.thumbnail.data.attributes.formats.medium.url
              }
              title={project.attributes.name}
              locationName={project.attributes.locationName}
              description={project.attributes.description}
            />
          </Grid>
        ))}

      {portfolio &&
        portfolio.map((project) => (
          <Grid item xs={12} md={6} lg={4} key={project.id}>
            <ProjectCard
              url={`portfolio/${project.attributes.slug}`}
              image={
                project.attributes.thumbnail.data.attributes.formats.medium.url
              }
              title={project.attributes.name}
              locationName={project.attributes.locationName}
              description={project.attributes.description}
            />
          </Grid>
        ))}
    </Grid>
  );
};

export default ProjectsGrid;
