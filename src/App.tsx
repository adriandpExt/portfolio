import { useEffect, useState } from "react";
import { Loader, Navbar } from "./components";

import { AppRoutes } from "./routes/config";

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          {AppRoutes}
        </>
      )}
    </>
  );
};

export default App;
