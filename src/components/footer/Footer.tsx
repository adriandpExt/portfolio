import { styled } from "@mui/material/styles";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

const StyledBottomNavigation = styled(BottomNavigation)({
  background: "#222",
  height: "55px",
  overflow: "hidden",
});

const StyledBottomNavigationAction = styled(BottomNavigationAction)({
  "& .MuiSvgIcon-root": {
    fill: "tan",
    "&:hover": {
      fill: "tomato",
      fontSize: "1.8rem",
    },
  },
});

export const Footer = () => {
  return (
    <StyledBottomNavigation>
      <StyledBottomNavigationAction icon={<FacebookIcon />} />
      <StyledBottomNavigationAction icon={<LinkedInIcon />} />
      <StyledBottomNavigationAction icon={<EmailIcon />} />
    </StyledBottomNavigation>
  );
};
export default Footer;
