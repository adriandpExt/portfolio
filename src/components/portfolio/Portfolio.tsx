import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import avatar from "../../assets/image/avatar.png";
import ProjectCard from "./ProjectCard";

const StyledMainContainer = styled(Box)({
  background: "#233",
  height: "100%",
});

const projects = [
  {
    name: "Project 1",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
    consequatur magni quod nesciunt necessitatibus molestiae non
    eligendi, magnam est aliquam recusandae? Magnam soluta minus
    iste alias sunt veritatis nisi dolores!`,
    image: avatar,
  },
  {
    name: "Project 2",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: avatar,
  },
  {
    name: "Project 3",
    description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis\
    consequatur magni quod nesciunt necessitatibus molestiae non\
    eligendi, magnam est aliquam recusandae? Magnam soluta minus\
    iste alias sunt veritatis nisi dolores!`,
    image: avatar,
  },
];

export const Portfolio = () => {
  return (
    <StyledMainContainer component="div">
      <Grid container>
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </StyledMainContainer>
  );
};

export default Portfolio;
