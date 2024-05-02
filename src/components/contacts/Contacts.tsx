import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import SendIcon from "@mui/icons-material/Send";

const StyledContactContainer = styled(Box)({
  background: "#233",
  height: "100vh",
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

export const Contact = () => {
  return (
    <StyledContactContainer component="div">
      <Grid container>
        <Box
          component="form"
          sx={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            position: "absolute",
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
      </Grid>
    </StyledContactContainer>
  );
};

export default Contact;
