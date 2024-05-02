import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

interface TimelineCardProps {
  jobtitle: string;
  year: string;
  description: string;
  companyName: string;
}

const StyledBox = styled(Container)({
  padding: "2rem",
  borderLeft: "4px solid #ccc",
});

export const TimelineCard = (props: TimelineCardProps) => {
  const { jobtitle, description, year, companyName } = props;
  return (
    <StyledBox maxWidth="sm">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography
            variant="h5"
            gutterBottom
            color="whitesmoke"
            sx={{ fontWeight: 600 }}
          >
            {year}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom color="whitesmoke">
            {jobtitle}
          </Typography>
          <Typography variant="caption" gutterBottom color="whitesmoke">
            {companyName}
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="caption"
            gutterBottom
            sx={{ whiteSpace: "wrap" }}
            color="whitesmoke"
          >
            {description}
          </Typography>
        </Grid>
      </Grid>
    </StyledBox>
  );
};

export default TimelineCard;
