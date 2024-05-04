import { About, Contacts, Home, Portfolio, Resume } from "../components";
import { RouteType } from "./types";

export const routesConfig: RouteType[] = [
  {
    path: "/portfolio",
    element: <Home />,
  },
  {
    path: "/portfolio/about",
    element: <About />,
  },
  {
    path: "/portfolio/cv",
    element: <Resume />,
  },
  {
    path: "/portfolio/project",
    element: <Portfolio />,
  },
  {
    path: "/portfolio/contact",
    element: <Contacts />,
  },
];
