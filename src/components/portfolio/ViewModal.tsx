import { Icon } from "@iconify/react";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  ImageListItem,
  Typography,
  Box,
} from "@mui/material";

interface ViewModalProps {
  open: boolean;
  onClose: () => void;
  project: {
    image: string[];
    name: string;
    description: string;
  } | null;
}
export const ViewModal = (props: ViewModalProps) => {
  const { open, onClose, project } = props;

  const renderBar = () => {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          borderBottom: "1px solid #ccc",
          backgroundColor: "#ccc",
          padding: 1,
        }}
      >
        <Icon icon="emojione:red-circle" width={10} />
        <Icon icon="twemoji:yellow-circle" width={10} />
        <Icon icon="twemoji:green-circle" width={10} />
      </Box>
    );
  };

  const renderSlider = (images: string[]) => {
    return images?.map((image, id) => (
      <ImageListItem key={id}>
        <img
          src={image}
          alt={""}
          loading="lazy"
          width={"100%"}
          height={"100%"}
        />
      </ImageListItem>
    ));
  };

  const renderDescription = (description: string) => {
    return <Typography variant="caption"> {description}</Typography>;
  };

  return (
    <Dialog
      open={open}
      maxWidth={"lg"}
      fullWidth
      onClose={onClose}
      sx={{ borderRadius: "2rem" }}
    >
      <DialogTitle fontWeight={600} fontFamily="cursive" variant="h5">
        {project?.name}
      </DialogTitle>
      <DialogContent>
        {renderBar()}

        {renderDescription(project?.description as string)}

        <AwesomeSlider className="w-screen" organicArrows={true}>
          {renderSlider(project?.image as string[])}
        </AwesomeSlider>
      </DialogContent>

      <DialogActions>
        <Button variant="contained" onClick={onClose}>
          CLOSE
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ViewModal;
