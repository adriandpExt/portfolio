import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import HomeIcon from "@mui/icons-material/Home";
import AppsIcon from "@mui/icons-material/Apps";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export const menuItems = [
  { listIcon: <HomeIcon />, listText: "Home", listPath: "/portfolio " },
  {
    listIcon: <AssignmentIndIcon />,
    listText: "Resume",
    listPath: "/portfolio/cv",
  },
  {
    listIcon: <AppsIcon />,
    listText: "About",
    listPath: "/portfolio/about",
  },
  {
    listIcon: <AppsIcon />,
    listText: "Projects",
    listPath: "/portfolio/project",
  },
  {
    listIcon: <ContactMailIcon />,
    listText: "Contact",
    listPath: "/portfolio/contact",
  },
];
