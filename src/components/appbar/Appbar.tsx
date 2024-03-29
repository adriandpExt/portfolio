import { ReactElement, ReactNode } from "react";

import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

interface AppbarProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

export const Appbar = (props: AppbarProps): ReactElement => {
  const { isDarkMode, toggleDarkMode } = props;

  const showIconButton = (): ReactNode => {
    return isDarkMode ? (
      <LightModeOutlinedIcon fontSize="medium" />
    ) : (
      <NightlightRoundOutlinedIcon fontSize="medium" />
    );
  };

  return (
    <nav
      className={`flex justify-between items-center py-4 px-8  ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-800"
      }`}
    >
      <div>
        <p className="font-dance font-semibold">ADP Studio</p>
      </div>
      <div className="flex items-center">
        <button onClick={toggleDarkMode} className="text-yellow-500">
          {showIconButton()}
          <span className="m-4 font-dance font-semibold">
            {isDarkMode ? "Light" : "Dark"}
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Appbar;
