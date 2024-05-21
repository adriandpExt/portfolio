import styled from "@emotion/styled";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
  Box,
} from "@mui/material";

import { Icon } from "@iconify/react";

interface Project {
  image: string[];
  name: string;
  description: string;
}
interface ProjectCardProps {
  project: Project;
  onView: (project: Project) => void;
}
const StyledCardContainer = styled(Card)({
  maxWidth: 345,
  margin: "3rem auto",
});

const renderBar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 1,
        borderBottom: "1px solid #ccc",
        backgroundColor: "#ccc",
        padding: 1,
      }}
    >
      <Icon icon="emojione:red-circle" width={10} />
      <Icon icon="twemoji:yellow-circle" width={10} />
      <Icon icon="twemoji:green-circle" width={10} />
    </Box>
  );
};

export const ProjectCard = (props: ProjectCardProps) => {
  const { project, onView } = props;

  const handleView = () => {
    onView(project);
  };

  return (
    <StyledCardContainer onClick={handleView}>
      {renderBar()}
      <CardActionArea>
        <CardContent>
          <Typography variant="h6" fontWeight={600} gutterBottom>
            {project.name}
          </Typography>
        </CardContent>

        <CardMedia
          component="img"
          alt={project.name}
          height="140"
          image={project?.image[0]}
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {project.description.length > 100
              ? `${project.description.substring(0, 100).trim()}...`
              : project.description}
          </Typography>
        </CardContent>

        <Divider />
      </CardActionArea>

      <CardActions>
        <Button size="small" color="primary" onClick={handleView}>
          LEARN MORE
        </Button>
      </CardActions>
    </StyledCardContainer>
  );
};

export default ProjectCard;
