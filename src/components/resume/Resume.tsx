import { ReactElement } from "react";

import { styled } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import TimelineCard from "./TimelineCard";

import { details } from "./utils";
import { Stack } from "@mui/material";

const MainContainer = styled(Box)({
  background: "#233",
});

export const Resume = () => {
  const handleDownload = (): ReactElement => {
    return (
      <Button
        sx={{
          color: "#FF6347",
          border: "1px solid #FF6347",
          width: "10rem",
          ":hover": {
            color: "#ccc",
            border: "1px solid #ccc",
          },
        }}
        href="https://drive.google.com/file/d/1f4PxPAWm7zZONOFaGRqayO5V4cDpBlTX/view?usp=drive_link"
        download="adrian_del_prado_cv.pdf"
        target="_blank"
        variant="outlined"
      >
        CV DOWNLOAD
      </Button>
    );
  };

  return (
    <MainContainer component="header">
      <Stack sx={{ alignItems: "center" }}>
        <Typography
          variant="h4"
          sx={{
            color: "#FF6347",
            padding: "3rem 0 2rem 0",
            textTransform: "uppercase",
          }}
        >
          Working Experience
        </Typography>

        {handleDownload()}
      </Stack>

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
