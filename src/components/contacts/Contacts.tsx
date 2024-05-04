import { useDispatch } from "react-redux";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import SendIcon from "@mui/icons-material/Send";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import { facebookinUrl, linkedinUrl } from "../../redux/reducer/linkReducers";

const StyledContactContainer = styled(Box)({
  background: "#233",
  height: "100%",
});

const InputField = styled(TextField)({
  "& label.Mui-focused": {
    color: "tomato",
  },
  "& label": {
    color: "tan",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "tan",
    },
    "&:hover fieldset": {
      borderColor: "tan",
    },
    "&.Mui-focused fieldset": {
      color: "#FFFFFF",
      borderColor: "tan",
    },
    "& .MuiOutlinedInput-input": {
      color: "#FFFFFF",
    },
  },
});

const StyledBottomNavigation = styled(BottomNavigation)({
  background: "#233",
  height: "55px",
  overflow: "auto",
  marginTop: "5rem",
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

export const Contacts = () => {
  const dispatch = useDispatch();

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

  return (
    <StyledContactContainer>
      <Grid container>
        <Box
          component="form"
          sx={{
            position: "relative",
            margin: "auto",
            maxWidth: "400px",
            textAlign: "center",
            pt: "50px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "tomato",
              textAlign: "center",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Hire or Contact me...
          </Typography>
          <InputField fullWidth={true} label="Name" variant="outlined" />
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            sx={{ margin: "1rem 0rem" }}
          />
          <InputField
            fullWidth={true}
            label="Message"
            variant="outlined"
            multiline
            rows={4}
          />
          <Button
            variant="outlined"
            fullWidth={true}
            endIcon={<SendIcon />}
            sx={{ marginTop: "1rem", color: "tomato", borderColor: "tan" }}
          >
            Contact Me
          </Button>
        </Box>
        <Grid item xs={12}>
          <StyledBottomNavigation>
            <StyledBottomNavigationAction
              icon={<FacebookIcon />}
              onClick={handleOpenFacebook}
            />
            <StyledBottomNavigationAction
              icon={<LinkedInIcon />}
              onClick={handleOpenLinkedin}
            />
            <StyledBottomNavigationAction icon={<EmailIcon />} />
            <StyledBottomNavigationAction icon={<CallIcon />} />
          </StyledBottomNavigation>
        </Grid>
      </Grid>
    </StyledContactContainer>
  );
};
