import { Routes, Route } from "react-router-dom";
import { routesConfig } from "./route";

export const AppRoutes = (
  <Routes>
    {routesConfig.map((route) => (
      <Route key={route.path} path={route.path} element={route.element} />
    ))}

    <Route path={"*"} element={<h1>ERRROR</h1>} />
  </Routes>
);
