import { ReactElement, ReactNode } from "react";
import { motion } from "framer-motion";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import me from "../../assets/image/me_id.png";

import { SvgIcons } from "../svg-icons";
import { IconName } from "../svg-icons/utils";

import cvDownload from "../../../public/cv/AdrianDelPrado_CV.pdf";

const iconName: IconName[] = [
  "ic_react",
  "ic_vue",
  "ic_javascript",
  "ic_typescript",
  "ic_html",
  "ic_css",
  "ic_bootstrap",
  "ic_tailwind",
  "ic_material_ui",
];

export const About = () => {
  const handleDownload = (): ReactElement => {
    return (
      <a href={cvDownload} download={"adrian_del_prado_cv.pdf"} target="_blank">
        <Button
          variant="outlined"
          sx={{ color: "#FF6347", border: "1px solid #FF6347" }}
        >
          CV DOWNLOAD
        </Button>
      </a>
    );
  };

  const renderStack = (): ReactNode => {
    return (
      <Grid container spacing={1}>
        {iconName.map((item, id) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={id}>
            <Box
              sx={{
                padding: "0.5rem",
                border: "2px solid #FF6347",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <motion.div whileHover={{ scale: 2 }}>
                <SvgIcons name={item} width={80} height={80} />
              </motion.div>
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Grid
      container
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

        <Typography color="#FFF" variant="h6" sx={{ fontFamily: "cursive" }}>
          Hello! I'm Adrian, and I like learning things and building them. The
          reason why I chose web development was that there was a lot to learn
          and a lot of things to build. I started web development in 2022, where
          I had to learn JavaScript from scratch, and wow, how I fell in love
          with it.
        </Typography>
      </Grid>

      <Grid item xs={12} sm={3}>
        <Box>
          <motion.img
            src={me}
            alt="me"
            height="50%"
            width="70%"
            style={{ filter: "grayscale(100%)" }}
            whileHover={{ filter: "grayscale(0%)", scale: 1.5 }}
            transition={{ duration: 0.5 }}
          />
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Typography color="#FFF" variant="h5" sx={{ fontFamily: "cursive" }}>
          Tech Stack
        </Typography>
        {renderStack()}
      </Grid>
    </Grid>
  );
};

export default About;
