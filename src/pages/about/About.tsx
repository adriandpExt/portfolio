import type { AboutProps } from "./types";

import { ReactElement } from "react";
import { motion } from "framer-motion";

// import { SvgIcons } from "../../components";
import { toggleLightTheme } from "../../components/utils";

import me from "../../assets/image/me_id.png";

// const renderSvg = (): ReactNode => {
//   const icon = iconName.map((iconNames) => {
//     return <SvgIcons name={iconNames} className="m-2" color="secondary" />;
//   });
//   return icon;
// };

const About = (props: AboutProps): ReactElement => {
  const { isDarkMode } = props;

  return (
    <section
      id="about"
      className={`${toggleLightTheme(isDarkMode)} py-4 px-8 h-screen`}
    >
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center mt-10">
        <div className="max-w-lg mx-auto">
          <p className="text-base md:text-md lg:text-lg text-ellipsis ">
            Welcome to my corner of the web!
            <span className="text-3xl font-semibold">
              {" "}
              I'm Adrian Del Prado
            </span>
            , a dedicated Front-End Developer who thrives on bringing digital
            experiences to life. With a keen eye for design and a love for
            clean, intuitive user interfaces, I'm committed to crafting websites
            that not only look stunning but also provide seamless functionality.
          </p>
        </div>

        <motion.div
          className="max-w-md mx-auto mt-1 rounded-2xl border-l-4 border-r-4 border-t-1 border-b-1 border-yellow-500 flex items-center justify-center"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={me}
            alt="Adrian Del Prado"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ height: "50%", width: "50%" }}
          />
        </motion.div>
      </section>
    </section>
  );
};

export default About;
