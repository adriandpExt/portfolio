import styled from "@emotion/styled";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

interface ProjectCardProps {
  project: {
    image: string;
    name: string;
    description: string;
  };
}
const StyledCardContainer = styled(Card)({
  maxWidth: 345,
  margin: "3rem auto",
});

export const ProjectCard = (props: ProjectCardProps) => {
  const { project } = props;

  return (
    <StyledCardContainer>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Project 1"
          height="140"
          image={project.image}
        />
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {project.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {project.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </StyledCardContainer>
  );
};

export default ProjectCard;
