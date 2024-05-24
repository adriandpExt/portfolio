import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { styled } from "@mui/material/styles";

import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import { facebookinUrl, linkedinUrl } from "../../redux/reducer/linkReducers";

const StyledBottomNavigation = styled(BottomNavigation)({
  background: "#222",
  height: "55px",
  overflow: "auto",
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
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenLinkedin = () => {
    const linkedin = "https://www.linkedin.com/in/adrian-del-prado-285aa81b8";
    window.open(linkedin, "_blank");
    dispatch(linkedinUrl(linkedinUrl));
  };

  const handleOpenFacebook = () => {
    const facebook = "https://www.facebook.com/adrian.delprado.98";
    window.open(facebook, "_blank");
    dispatch(facebookinUrl(facebook));
  };

  const handleOpenContact = (): void => {
    navigate("/portfolio/contact");
  };

  return (
    <StyledBottomNavigation>
      <StyledBottomNavigationAction
        data-testid="facebook"
        icon={<FacebookIcon />}
        onClick={handleOpenFacebook}
      />
      <StyledBottomNavigationAction
        data-testid="linkedin"
        icon={<LinkedInIcon />}
        onClick={handleOpenLinkedin}
      />
      <StyledBottomNavigationAction
        data-testid="contact"
        icon={<EmailIcon />}
        onClick={handleOpenContact}
      />
    </StyledBottomNavigation>
  );
};
export default Footer;
