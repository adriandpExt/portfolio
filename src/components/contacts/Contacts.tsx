import type { ContactForm } from "./types";

import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";

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
import { contacSubmit } from "../../redux/reducer/contactReducers";

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
    dispatch(linkedinUrl(linkedin));
  };

  const handleOpenFacebook = () => {
    const facebook = "https://www.facebook.com/adrian.delprado.98";
    window.open(facebook, "_blank");
    dispatch(facebookinUrl(facebook));
  };

  const renderBottomNavigation = () => {
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
        <StyledBottomNavigationAction icon={<EmailIcon />} />
        <StyledBottomNavigationAction icon={<CallIcon />} />
      </StyledBottomNavigation>
    );
  };
  const validationSchema = yup.object<ContactForm>({
    fullname: yup.string().required("Fullname is required"),
    email: yup.string().required("Email is required"),
    message: yup.string().required("Message type is required"),
  });

  const handleSubmitForm = (values: ContactForm) => {
    console.log("values", dispatch(contacSubmit(values)));
    form.resetForm();
  };

  const form = useFormik<ContactForm>({
    initialValues: {
      fullname: "",
      email: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => handleSubmitForm(values),
  });

  return (
    <StyledContactContainer>
      <Grid container>
        <Box
          sx={{
            position: "relative",
            margin: "auto",
            maxWidth: "400px",
            textAlign: "center",
            pt: "50px",
          }}
        >
          <form onSubmit={form.handleSubmit} data-testid="contact-form">
            <Typography
              variant="h5"
              sx={{
                color: "tan",
                textAlign: "center",
                textTransform: "uppercase",
                marginBottom: "1rem",
              }}
            >
              Hire or Contact me...
            </Typography>
            <InputField
              data-testid="fullname"
              label="Fullname"
              name="fullname"
              variant="outlined"
              fullWidth={true}
              value={form.values.fullname}
              onChange={form.handleChange}
              error={form.touched.fullname && Boolean(form.errors.fullname)}
              helperText={form.touched.fullname && form.errors.fullname}
            />
            <InputField
              fullWidth={true}
              data-testid="email"
              label="Email"
              name="email"
              variant="outlined"
              sx={{ margin: "1rem 0rem" }}
              value={form.values.email}
              onChange={form.handleChange}
              error={form.touched.email && Boolean(form.errors.email)}
              helperText={form.touched.email && form.errors.email}
            />
            <InputField
              fullWidth={true}
              data-testid="message"
              label="Message"
              name="message"
              variant="outlined"
              value={form.values.message}
              onChange={form.handleChange}
              error={form.touched.message && Boolean(form.errors.message)}
              helperText={form.touched.message && form.errors.message}
              multiline
              rows={4}
            />
            <Button
              variant="outlined"
              type="submit"
              fullWidth={true}
              endIcon={<SendIcon />}
              sx={{
                marginTop: "1rem",
                color: "tan",
                borderColor: "tan",
                "&:hover": {
                  borderColor: "tomato",
                  color: "tomato",
                },
              }}
            >
              Send
            </Button>
          </form>
        </Box>

        <Grid item xs={12}>
          {renderBottomNavigation()}
        </Grid>
      </Grid>
    </StyledContactContainer>
  );
};
