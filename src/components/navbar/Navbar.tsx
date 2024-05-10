import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { styled } from "@mui/material/styles";

import AppsIcon from "@mui/icons-material/Apps";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

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
import { menuItems } from "./utils";

const StyledBox = styled(Box)({
  width: 280,
  background: "#511",
  height: "100%",
});

const StyledAvatar = styled(Avatar)({
  display: "block",
  margin: "0.5rem auto",
  width: "10rem",
  height: "10rem",
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

export const Navbar = () => {

  const navigate =useNavigate();

  const [open, setOpen] = useState(false);

  const renderInfo = () => {
    return (
      <List sx={{ color: "#D2B48C" }}>
        <ListItem>
          <ListItemIcon sx={{ color: "#D2B48C" }}>
            <EmailIcon />
          </ListItemIcon>
          <Typography fontFamily="cursive">adriandp52@gmail.com</Typography>
        </ListItem>
        <ListItem>
          <ListItemIcon sx={{ color: "#D2B48C" }}>
            <CallIcon />
          </ListItemIcon>
          <Typography fontFamily="cursive">+63 926 391 2007</Typography>
        </ListItem>
      </List>
    );
  };

  const renderList = () => {
    return (
      <List>
        {menuItems.map((item, index) => (
          <ListItem disablePadding key={index}>
            <ListItemButton
            onClick={()=>navigate(item.listPath)}
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#FF6347",
                },
              }}
            >
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
    );
  };

  const sideList = () => (
    <StyledBox component="div">
      <StyledAvatar src={avatar} alt="adrian" />
      {renderInfo()}
      <Divider />
      {renderList()}
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
                  fontFamily: "cursive",
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
