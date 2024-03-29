import { ReactElement } from "react";
import { motion } from "framer-motion";

import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import { toggleDarkTheme } from "../../components/utils";

interface HomeProps {
  isDarkMode: boolean;
}

const Home = (props: HomeProps): ReactElement => {
  const { isDarkMode } = props;

  const handleToggleDropIcon = (isDarkMode: boolean) => {
    return isDarkMode
      ? "bg-gray-200  text-gray-800"
      : "bg-gray-900  text-white";
  };

  return (
    <>
      <section
        className={`py-8 h-screen flex flex-col justify-center items-center ${toggleDarkTheme(
          isDarkMode
        )}`}
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <h1 className="text-6xl font-extrabold tracking-tighter font-dance">
            Hi! I'm a Frontend Developer.
          </h1>
          <p className="mt-2 text-xl">Discover amazing things here!</p>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className={`mt-8 animate-bounce cursor-pointer z-10 rounded-2xl shadow-md
          p-3 ${handleToggleDropIcon(isDarkMode)}`}
        >
          <KeyboardDoubleArrowDownOutlinedIcon fontSize="large" />
        </motion.div>
      </section>
    </>
  );
};

export default Home;
