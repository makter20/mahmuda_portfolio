import "./Contact.css";
import { motion } from "framer-motion";
const ContactIcon = () => {
  return (
    <motion.svg
      className="mailIcon"
      width="150px"
      height="150px"
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "mirror",
        repeatDelay: 0.5,
      }}
    >
      {/* Envelope SVG Path */}
      <motion.path
        fill="#4a90e2"
        d="M50,12H14c-1.1,0-2,0.9-2,2v36c0,1.1,0.9,2,2,2h36c1.1,0,2-0.9,2-2V14C52,12.9,51.1,12,50,12z M48,16.4l-16,12.8
          L16,16.4V14h32V16.4z M14,48V21.1l17.2,13.8c0.4,0.3,0.9,0.5,1.4,0.5c0.5,0,1-0.2,1.4-0.5L50,21.1V48H14z"
      />
    </motion.svg>
  );
};
export default ContactIcon;
