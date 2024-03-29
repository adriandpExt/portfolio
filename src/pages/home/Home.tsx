import { ReactElement } from "react";
import { motion } from "framer-motion";

import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";

interface HomeProps {
  isDarkMode: boolean;
}

const Home = (props: HomeProps): ReactElement => {
  const { isDarkMode } = props;

  return (
    <>
      <section
        className={`py-8 h-screen flex flex-col justify-center items-center ${
          isDarkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <h1 className="text-6xl font-extrabold tracking-tighter font-dance text-center">
            Hi! I'm Adrian Del Prado.
          </h1>
          <p className="mt-2 text-xl">Discover amazing things here!</p>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className={`mt-8 animate-bounce cursor-pointer z-10 rounded-full shadow-md
          p-3 ${
            isDarkMode
              ? "bg-gray-200  text-gray-800"
              : "bg-gray-900  text-white"
          }`}
        >
          <KeyboardDoubleArrowDownOutlinedIcon fontSize="large" />
        </motion.div>
      </section>
    </>
  );
};

export default Home;
