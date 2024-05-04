import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import TimelineCard from "./TimelineCard";
import { Grid } from "@mui/material";
import { details } from "./utils";

const MainContainer = styled(Box)({
  background: "#233",
});

export const Resume = () => {
  return (
    <MainContainer component="header">
      <Typography
        variant="h4"
        align="center"
        sx={{ color: "#FF6347", padding: "3rem 0", textTransform: "uppercase" }}
      >
        Working Experience
      </Typography>

      <Grid container alignItems="center">
        <Grid item xs={12} sx={{ order: 1 }}>
          {details.map((item, id) => (
            <TimelineCard details={item} key={id} />
          ))}
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default Resume;
