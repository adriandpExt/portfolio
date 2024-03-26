import { ReactElement, useState } from "react";

import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

import Home from "./pages/home";

const App = (): ReactElement => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <>
      <Home />
      <Home />
      <Home />

      {showScroll && (
        <div
          className="fixed bottom-4 right-4 cursor-pointer z-10 rounded-full bg-white shadow-md p-3"
          onClick={scrollTop}
        >
          <KeyboardDoubleArrowUpIcon />
        </div>
      )}
    </>
  );
};

export default App;
