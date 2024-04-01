import { ReactElement, useState } from "react";

import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

import { Appbar } from "./components";

import Home from "./pages/home";
import About from "./pages/about";

const App = (): ReactElement => {
  const [showScroll, setShowScroll] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const checkScrollTop = (): void => {
    if (!showScroll && window.scrollY > 400) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 400) {
      setShowScroll(false);
    }
  };

  const scrollTop = (): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  const toggleDarkMode = (): void => {
    setDarkMode(!darkMode);
  };

  const scrollToAboutPage = (): void => {
    const aboutSection =
      (document.getElementById("about") as HTMLElement) || null;

    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderPages = (): ReactElement => {
    return (
      <>
        <Appbar isDarkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <Home isDarkMode={darkMode} toggleNextPage={scrollToAboutPage} />
        <About isDarkMode={darkMode} />
        <Home isDarkMode={darkMode} toggleNextPage={scrollToAboutPage} />
      </>
    );
  };

  return (
    <>
      {renderPages()}

      {showScroll && (
        <div
          className="fixed bottom-4 right-4 cursor-pointer z-10 rounded-full bg-white shadow-md p-3 scroll-smooth"
          onClick={scrollTop}
        >
          <KeyboardDoubleArrowUpIcon />
        </div>
      )}
    </>
  );
};

export default App;
