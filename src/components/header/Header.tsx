import { styled } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
// import Avatar from "@mui/material/Avatar";

// import avatar from "../../assets/me_id.png";

import { ReactTyped } from "react-typed";

const StyledBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  width: "100vw",
  textAlign: "center",
  zIndex: 1,
});

// const StyledAvatar = styled(Avatar)({
//   width: "5rem",
//   height: "5rem",
//   margin: "1rem",
// });

export const Header = () => {
  return (
    <StyledBox>
      <Grid container sx={{ justifyContent: "center" }}>
        {/* <StyledAvatar src={avatar} alt="Adrian" /> */}
      </Grid>
      <Typography sx={{ color: "#FF6347" }} variant="h4">
        <ReactTyped strings={["Adrian Del Prado"]} typeSpeed={40} />
      </Typography>

      <Typography
        sx={{ color: "tan", textTransform: "uppercase" }}
        variant="h5"
      >
        <ReactTyped
          strings={["Frontend Developer", "React", "Vue"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </Typography>
    </StyledBox>
  );
};

export default Header;
