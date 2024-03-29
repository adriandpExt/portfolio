import { ReactElement, ReactNode } from "react";

import NightlightRoundOutlinedIcon from "@mui/icons-material/NightlightRoundOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

interface AppbarProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

export const Appbar = (props: AppbarProps): ReactElement => {
  const { isDarkMode, toggleDarkMode } = props;

  // const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

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
      <div>Logo</div>
      <div className="flex items-center">
        <span className="mr-4">{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
        <button onClick={toggleDarkMode} className="text-yellow-500">
          {showIconButton()}
        </button>
      </div>
    </nav>
  );
};

export default Appbar;
