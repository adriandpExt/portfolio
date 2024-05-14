import { useState } from "react";

import Grid from "@mui/material/Grid";

import ViewModal from "./ViewModal";
import ProjectCard from "./ProjectCard";

import { projects } from "./utils";

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
    <>
      <Grid container gap={1}>
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} lg={3} xl={2} key={i}>
            <ProjectCard project={project} onView={handleView} />
          </Grid>
        ))}
      </Grid>

      <ViewModal
        open={viewProject}
        project={projectCard}
        onClose={handleClose}
      />
    </>
  );
};

export default Portfolio;
