import { ReactElement, ReactNode } from "react";
import { motion } from "framer-motion";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import me from "../../assets/image/me_id.png";

import { SvgIcons } from "../svg-icons";

import Wrapper from "./Wrapper";

import { techStack, techTools } from "./utils";
import { Stack } from "@mui/material";

export const About = () => {
  const handleDownload = (): ReactElement => {
    return (
      <Button
        href="@/assets/cv/AdrianDelPrado_CV.pdf"
        download="adrian_del_prado_cv.pdf"
        target="_blank"
        variant="outlined"
        sx={{ color: "#FF6347", border: "1px solid #FF6347" }}
      >
        CV DOWNLOAD
        {/* testing dl */}
      </Button>
    );
  };

  const renderImage = () => {
    return (
      <Box>
        <motion.img
          src={me}
          alt="me"
          height="50%"
          width="70%"
          style={{
            filter: "grayscale(100%) drop-shadow(15px 10px 4px crimson)",
          }}
          whileHover={{
            filter: "grayscale(0%) drop-shadow(15px 10px 4px tomato)",
            scale: 1.5,
          }}
          transition={{ duration: 0.5 }}
        />
      </Box>
    );
  };

  const renderStack = (): ReactNode => {
    return (
      <Grid container spacing={1}>
        {techStack.map((item, id) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={id}>
            <Wrapper>
              <SvgIcons
                name={item}
                width={50}
                height={50}
                data-testid="tech-stack-icon"
              />
            </Wrapper>
          </Grid>
        ))}
      </Grid>
    );
  };

  const renderTools = (): ReactNode => {
    return (
      <Grid container spacing={1}>
        {techTools.map((item, id) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={id}>
            <Wrapper>
              <SvgIcons
                name={item}
                width={50}
                height={50}
                data-testid="tech-tools-icon"
              />
            </Wrapper>
          </Grid>
        ))}
      </Grid>
    );
  };

  const renderAboutIntro = () => {
    return (
      <Stack gap={3}>
        <Typography color="#FFF" variant="h6" sx={{ fontFamily: "cursive" }}>
          Hello! I'm{" "}
          <span
            style={{ color: "tomato", fontSize: "2rem", fontStyle: "italic" }}
          >
            Adrian Del Prado
          </span>
          , and I like learning things and building them.
        </Typography>

        <Typography color="#FFF" variant="h6" sx={{ fontFamily: "cursive" }}>
          The reason why I chose web development was that there was a lot to
          learn and a lot of things to build.
        </Typography>

        <Typography color="#FFF" variant="h6" sx={{ fontFamily: "cursive" }}>
          I am fluent in classics like{" "}
          <span
            style={{ color: "tomato", fontSize: "2rem", fontStyle: "italic" }}
          >
            {" "}
            React JS, Typescript{" "}
          </span>{" "}
          And{" "}
          <span
            style={{ color: "tomato", fontSize: "2rem", fontStyle: "italic" }}
          >
            {" "}
            React Frameworks
          </span>
        </Typography>

        <Typography color="#FFF" variant="h6" sx={{ fontFamily: "cursive" }}>
          My field of Interest's are building new{" "}
          <span
            style={{ color: "tomato", fontSize: "2rem", fontStyle: "italic" }}
          >
            Web Technologies and Products
          </span>
        </Typography>
      </Stack>
    );
  };

  return (
    <Grid
      container
      rowGap={5}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
        alignContent: "center",
        alignSelf: "center",
        paddingX: "5rem",
        whiteSpace: "wrap",
      }}
    >
      <Grid item xs={12} sm={9}>
        {handleDownload()}
        {renderAboutIntro()}
      </Grid>

      <Grid item xs={12} sm={3}>
        {renderImage()}
      </Grid>

      <Grid item xs={12}>
        <Typography color="#FFF" variant="h5" sx={{ fontFamily: "cursive" }}>
          Tech Stack
        </Typography>
        {renderStack()}
      </Grid>

      <Grid item xs={12}>
        <Typography color="#FFF" variant="h5" sx={{ fontFamily: "cursive" }}>
          Tech Tools
        </Typography>
        {renderTools()}
      </Grid>
    </Grid>
  );
};

export default About;
