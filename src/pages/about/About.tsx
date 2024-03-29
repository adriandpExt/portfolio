import { ReactElement } from "react";
import { motion } from "framer-motion";
import { toggleLightTheme } from "../../components/utils";
import me from "../../assets/image/me_id.png";

interface AboutProps {
  isDarkMode: boolean;
}

const About = ({ isDarkMode }: AboutProps): ReactElement => {
  return (
    <section className={`${toggleLightTheme(isDarkMode)} py-4 px-8 h-screen`}>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
        <div className="max-w-lg mx-auto">
          <p className="text-base md:text-lg lg:text-xl text-ellipsis ">
            Welcome to my corner of the web! I'm Adrian Del Prado, a dedicated
            Front-End Developer who thrives on bringing digital experiences to
            life. With a keen eye for design and a love for clean, intuitive
            user interfaces, I'm committed to crafting websites that not only
            look stunning but also provide seamless functionality.
          </p>
        </div>
        <motion.div
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.img
            src={me}
            alt="Adrian Del Prado"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ height: "50%", width: "60%" }}
          />
        </motion.div>
      </section>
    </section>
  );
};

export default About;
