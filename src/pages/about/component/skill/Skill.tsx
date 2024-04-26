import { motion } from "framer-motion";
import { SvgIcons } from "../../../../components";
import { IconName } from "../../../../components/svg-icons/utils";

export const Skill = () => {
  const iconName: IconName[] = [
    "ic_vue",
    "ic_react",
    "ic_html",
    "ic_css",
    "ic_javascript",
    "ic_bootstrap",
    "ic_material_ui",
    "ic_tailwind",
  ];

  return (
    <div>
      <h5 className="text-center font-serif font-extrabold text-3xl my-28">
        SKILLS
      </h5>
      <div className="grid grid-cols-3 sm:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12 justify-center mt-10">
        {iconName.map((item, index) => (
          <div
            key={index}
            className="w-20 h-20 border border-gray-500 flex justify-center items-center mb-4"
          >
            <motion.div whileHover={{ scale: 2 }} whileTap={{ scale: 1 }}>
              <SvgIcons
                name={item}
                key={index}
                sx={{ width: 65, height: 65 }}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
