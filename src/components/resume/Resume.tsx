import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import TimelineCard from "./TimelineCard";
import { Grid } from "@mui/material";

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
          <TimelineCard
            jobtitle={"Solutions Developer"}
            companyName="LENOVO PCCW SOLUTIONS PHILIPPINES INC"
            year={"2022-2024"}
            description={`Motivated Solution Developer with a dedication to delivering sophisticated and effective web applications. I am in 
             search of a challenging position where I can utilize my two years of expertise in front-end development and UI 
             design, employing contemporary technologies to contribute to the company's success`}
          />
        </Grid>
      </Grid>
    </MainContainer>
  );
};

export default Resume;
