import { motion } from "framer-motion";
import Backdrop from "../backdrop/Backdrop";
/* import "./modal.css";
 */const dropIn = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
        duration: 0.5,
        type: "spring",
        damping: 25,
        stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};
const Modal = ({ handleClose, text }) => {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        className="modal"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <motion.div className="modal-content">
          <motion.div className="modal-content-logo">
            <motion.button onClick={handleClose}>Close</motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
