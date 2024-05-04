import { useState } from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import ProjectCard from "./ProjectCard";
import { projects } from "./utils";
import ViewModal from "./ViewModal";

const StyledMainContainer = styled(Box)({
  background: "#233",
  height: "100%",
});

interface Project {
  image: string[];
  name: string;
  description: string;
}
export const Portfolio = () => {
  const [viewProject, setViewProject] = useState<boolean>(false);
  const [projectCard, setProjectCard] = useState<Project | null>(null);

  const handleView = (project: Project) => {
    setProjectCard(project);
    setViewProject(true);
  };
  const handleClose = () => {
    setViewProject(false);
  };
  return (
    <StyledMainContainer>
      <Grid container>
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <ProjectCard project={project} onView={handleView} />
          </Grid>
        ))}
      </Grid>

      <ViewModal
        open={viewProject}
        project={projectCard}
        onClose={handleClose}
      />
    </StyledMainContainer>
  );
};

export default Portfolio;
