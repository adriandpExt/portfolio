import { ReactElement } from "react";

import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { handleToggleDropIcon } from "../utils";

interface ScrollToTopProps {
  handleScrollTop: () => void;
  isDarkMode: boolean;
}

export const ScrollToTop = (props: ScrollToTopProps): ReactElement => {
  const { handleScrollTop, isDarkMode } = props;

 

  return (
    <div
      className={`fixed bottom-4 right-4 cursor-pointer z-10 rounded-full shadow-md p-3 scroll-smooth ${handleToggleDropIcon(
        isDarkMode
      )}`}
      onClick={handleScrollTop}
    >
      <KeyboardDoubleArrowUpIcon />
    </div>
  );
};

export default ScrollToTop;
