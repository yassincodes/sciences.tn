import { motion } from "framer-motion";
import Header from "../components/Header";

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

function Videos() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <Header />
      <div
        style={{
          margin: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        https://codepen.io/codingyaar/pen/ExLZayv
      </div>
    </motion.div>
  );
}

export default Videos;