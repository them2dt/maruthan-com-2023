import React from "react";
import { animate, motion } from "framer-motion";
import "./backdrop.css";

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className="backdrop"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      end={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
