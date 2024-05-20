import { ReactElement, ReactNode } from "react";

import { motion } from "framer-motion";

import Box from "@mui/material/Box";

interface WrapperProps {
  children: ReactElement | ReactNode;
}

export const Wrapper = (props: WrapperProps) => {
  const { children } = props;
  return (
    <Box
      sx={{
        padding: "0.5rem",
        border: "2px solid #FF6347",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 0.5,
        }}
      >
        <motion.div whileHover={{ scale: 2 }}>{children}</motion.div>
      </motion.div>
    </Box>
  );
};
export default Wrapper;
