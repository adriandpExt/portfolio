import { ReactElement, useState } from "react";

import { Appbar, ScrollToTop } from "./components";

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Work from "./pages/work/Work";

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
        <Work isDarkMode={darkMode} />
        <Contact isDarkMode={darkMode} />
      </>
    );
  };

  return (
    <>
      {renderPages()}

      {showScroll && (
        <ScrollToTop handleScrollTop={scrollTop} isDarkMode={darkMode} />
      )}
    </>
  );
};

export default App;
