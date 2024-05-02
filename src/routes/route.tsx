import { RouteType } from "./types";

import { Home } from "../components/home";
import Resume from "../components/resume/Resume";
import { Portfolio } from "../components/portfolio";
import Contacts from "../components/contacts/Contacts";

export const routesConfig: RouteType[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cv",
    element: <Resume />,
  },
  {
    path: "/project",
    element: <Portfolio />,
  },
  {
    path: "/contact",
    element: <Contacts />,
  },
];
