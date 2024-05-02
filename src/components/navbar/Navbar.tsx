import { useState } from "react";
import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";

import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import ContactMailIcon from "@mui/icons-material/ContactMail";

import Box from "@mui/material/Box";
import {
  Avatar,
  Divider,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from "@mui/material";

import avatar from "../../assets/image/me_id.png";

import { Footer } from "../footer";

const StyledBox = styled(Box)({
  width: 250,
  background: "#511",
  height: "100%",
});

const StyledAvatar = styled(Avatar)({
  display: "block",
  margin: "0.5rem auto",
  width: "13rem",
  height: "13rem",
});

const StyledListItemButton = styled(Link)({
  color: "tan",
  textDecoration: "none",
  fontWeight: "500",
});

const StyledAppBar = styled(AppBar)({
  background: "#222",
  margin: 0,
});

const menuItems = [
  { listIcon: <HomeIcon />, listText: "Home", listPath: "/portfolio " },
  { listIcon: <AssignmentIndIcon />, listText: "Resume", listPath: "/cv" },
  { listIcon: <AppsIcon />, listText: "Portfolio", listPath: "/project" },
  { listIcon: <ContactMailIcon />, listText: "Contact", listPath: "/contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const sideList = () => (
    <StyledBox component="div">
      <StyledAvatar src={avatar} alt="adrian" />
      <Divider />

      <List>
        {menuItems.map((item, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#D2B48C" }}>
                {item.listIcon}
              </ListItemIcon>
              <StyledListItemButton to={item.listPath}>
                {item.listText}
              </StyledListItemButton>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </StyledBox>
  );

  return (
    <>
      <Box component="nav">
        <StyledAppBar position="static">
          <Toolbar>
            <IconButton onClick={() => setOpen(true)}>
              <AppsIcon
                sx={{ color: "#FF6347", marginRight: "1rem" }}
                fontSize="large"
              />
              <Typography
                variant="h5"
                sx={{
                  color: "tan",
                }}
              >
                ADRIAN
              </Typography>
            </IconButton>
          </Toolbar>
        </StyledAppBar>
      </Box>
      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        {sideList()}
        <Footer />
      </Drawer>
    </>
  );
};

export default Navbar;
