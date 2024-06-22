import { ReactElement } from "react";

import { styled } from "@mui/material/styles";

import Typography from "@mui/material/Typography";

import Box from "@mui/material/Box";

import { ReactTyped } from "react-typed";
import introBg from "../../assets/image/intro_bg.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "100%",
  height: "100%",
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
  const navigate = useNavigate();

  const renderName = (): ReactElement => {
    return (
      <Typography
        data-testid="fullname"
        sx={{
          color: "#FF6347",
          textAlign: "center",
          fontWeight: 600,
        }}
        variant="h2"
        fontFamily="monospace"
      >
        <ReactTyped strings={["Adrian Del Prado"]} typeSpeed={40} />
      </Typography>
    );
  };

  const renderProfession = (): ReactElement => {
    return (
      <Typography
        data-testid="profession"
        sx={{
          textAlign: "center",
          backgroundColor: "rgba(128, 128, 128, 0.5)",
          padding: 0.3,
          borderRadius: 1,
        }}
        variant="h5"
      >
        I am a
        <span
          style={{
            margin: "0 0.5rem",
            fontWeight: 600,
            background: "#FF6347",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "monospace",
            fontSize: "2rem",
          }}
        >
          <ReactTyped
            strings={["FRONTEND DEVELOPER", " SOFTWARE DEVELOPER"]}
            typeSpeed={65}
            backSpeed={65}
            loop
          />
        </span>
      </Typography>
    );
  };

  const handleNavigate = (): void => {
    navigate("/portfolio/project");
  };

  return (
    <StyledBox gap={2}>
      {renderName()}
      {renderProfession()}

      <Button
        onClick={handleNavigate}
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "tomato",
          ":hover": {
            color: "tomato",
            backgroundColor: "whitesmoke",
          },
        }}
      >
        see projects
      </Button>
    </StyledBox>
  );
};

export default Header;
