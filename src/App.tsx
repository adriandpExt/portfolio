import { Navbar } from "./components";

import { AppRoutes } from "./routes/config";

const App = () => {
  return (
    <>
      <Navbar />
      {AppRoutes}
    </>
  );
};

export default App;
