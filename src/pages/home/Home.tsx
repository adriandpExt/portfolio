import type { HomeProps } from "./types";

import { ReactElement } from "react";
import { motion } from "framer-motion";

import KeyboardDoubleArrowDownOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowDownOutlined";
import { handleToggleDropIcon } from "../../components/utils";

const Home = (props: HomeProps): ReactElement => {
  const { isDarkMode, toggleNextPage } = props;

  return (
    <>
      <section
        id="/"
        className={`py-8 h-screen bg-cover bg-center bg-fixed flex flex-col justify-center items-center `}
        style={{
          backgroundImage: "url(src/assets/image/intro-bg.jpg)",
        }}
      >
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
        >
          <h1 className="text-6xl font-extrabold tracking-tighter font-dance text-white">
            Hi! I'm a Frontend Developer.
          </h1>

          <p className="mt-2 text-xl text-white">
            Discover amazing things here!
          </p>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className={`mt-8 animate-bounce cursor-pointer z-10 rounded-2xl shadow-md
          p-3 ${handleToggleDropIcon(isDarkMode)}`}
          onClick={toggleNextPage}
        >
          <KeyboardDoubleArrowDownOutlinedIcon fontSize="large" />
        </motion.div>
      </section>
    </>
  );
};

export default Home;
