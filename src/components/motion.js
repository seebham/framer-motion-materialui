import React from "react";
import { motion } from "framer-motion";

const MotionDiv = ({ children }, props) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0, overflow: "hidden" }}
      animate={{ opacity: 1, height: "auto", overflow: "visible" }}
    >
      {children}
    </motion.div>
  );
};

export default MotionDiv;
