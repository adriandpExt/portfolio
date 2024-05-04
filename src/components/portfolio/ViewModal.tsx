import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  ImageListItem,
  Typography,
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

  return (
    <Dialog
      open={open}
      maxWidth={"lg"}
      onClose={onClose}
      sx={{ borderRadius: "2rem" }}
    >
      <DialogTitle fontWeight={600} fontFamily="cursive" variant="h5">
        {project?.name}
      </DialogTitle>
      <DialogContent>
        {project?.image.map((image, id) => (
          <ImageListItem key={id} sx={{ marginBottom: "4rem" }}>
            <img src={image} alt={project.name} loading="lazy" />
          </ImageListItem>
        ))}

        <Typography variant="caption"> {project?.description}</Typography>
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
