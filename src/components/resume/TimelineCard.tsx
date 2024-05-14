import { Icon } from "@iconify/react";

import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

interface Timeline {
  jobtitle: string;
  year: string;
  description: string;
  companyName: string;
}

interface TimelineCardProps {
  details: Timeline;
}

const StyledBox = styled(Container)({
  padding: "2rem",
  borderLeft: "4px solid #ccc",
});

export const TimelineCard = (props: TimelineCardProps) => {
  const { details } = props;

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

  const renderContent = () => {
    return (
      <Box sx={{ padding: 2 }}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              gutterBottom
              color="whitesmoke"
              sx={{ fontWeight: 600 }}
            >
              {details.year}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom color="whitesmoke">
              {details.jobtitle}
            </Typography>
            <Typography variant="caption" gutterBottom color="whitesmoke">
              {details.companyName}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="caption"
              gutterBottom
              sx={{ whiteSpace: "wrap" }}
              color="whitesmoke"
            >
              {details.description}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
  };
  return (
    <StyledBox maxWidth="sm">
      <>
        {renderBar()}
        {renderContent()}
      </>
    </StyledBox>
  );
};

export default TimelineCard;
