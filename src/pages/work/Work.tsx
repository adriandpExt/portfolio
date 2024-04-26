import { ReactElement } from "react";
import { toggleDarkTheme } from "../../components/utils";
import { motion } from "framer-motion";

interface WorkProps {
  isDarkMode: boolean;
}

const Work = ({ isDarkMode }: WorkProps): ReactElement => {
  return (
    <div
      id="work"
      className={`${toggleDarkTheme(isDarkMode)} py-4 px-8 h-screen `}
    >
      <h5 className="text-center font-serif font-extrabold text-3xl">
        WORK EXPERIENCE
      </h5>
      <div className="flex justify-center mt-8">
        <div className="tree w-96">
          <ul>
            <li className="mb-8">
              <motion.div
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, scale: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="border-l-2 border-gray-400 pl-4 h-auto"
              >
                <h2 className="text-lg font-semibold mb-2">
                  Solution Developer
                </h2>
                <p className="text-sm mb-2">
                  Lenovo PCCW Solutions Philippines Inc
                </p>
                <p className="text-sm ">March 21, 2022 – March 27, 2024</p>
              </motion.div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Work;
