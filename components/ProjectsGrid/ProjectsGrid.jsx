import React from "react";
import { Grid, Collapse, useMediaQuery, Button, Box } from "@mui/material";
import ProjectCard from "../ProjectCard/ProjectCard";

const ProjectsGrid = ({ projects, portfolio }) => {
  const matchesMd = useMediaQuery("(min-width: 768px)");
  const matchesLg = useMediaQuery("(min-width: 1200px)");
  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <>
      <Collapse
        in={checked}
        collapsedSize={matchesLg ? 600 : matchesMd ? 900 : 1800}
      >
        <Grid container>
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
      </Collapse>
      <Box sx={{ paddingY: 3, display: "flex", justifyContent: "center" }}>
        <Button onClick={handleChange} variant={"outlined"}>
          Show all projects
        </Button>
      </Box>
    </>
  );
};

export default ProjectsGrid;
