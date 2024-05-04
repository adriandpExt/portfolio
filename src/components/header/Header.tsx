import { styled } from "@mui/material/styles";

import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

import { ReactTyped } from "react-typed";
import introBg from "../../assets/image/intro_bg.png";

const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "90vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  color: theme.palette.common.white,
  "&::before": {
    content: "''",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${introBg})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    filter: "grayscale(100%)",
    zIndex: -1,
  },
}));

export const Header = () => {
  return (
    <StyledBox>
      <Typography
        sx={{
          color: "#FF6347",
          textAlign: "center",
          fontWeight: 500,
        }}
        variant="h2"
      >
        <ReactTyped strings={["Adrian Del Prado"]} typeSpeed={40} />
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          backgroundColor: "#000",
        }}
        variant="h5"
      >
        I am a
        <span
          style={{
            margin: "0 0.5rem",
            fontWeight: 600,
            background:
              "-webkit-linear-gradient(45deg, #C0C0C0, #808080, #0D47A1, #2196F3, #800080, #FF6347)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <ReactTyped
            strings={["FRONTEND DEVELOPER", " SOFTWARE DEVELOPER"]}
            typeSpeed={30}
            backSpeed={30}
            loop
          />
        </span>
      </Typography>
    </StyledBox>
  );
};

export default Header;
