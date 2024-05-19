import { motion } from "framer-motion";
import Header from "../components/Header";
import gameGIF from "../assets/game.gif";

const containerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

function Games() {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <Header />
      <div
        style={{
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.img
          src={gameGIF}
          alt="Game"
          style={{
            marginRight: "55px",
            marginBottom: "20px",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
        />
        <motion.p
          style={{
            marginTop: "10px",
            fontSize: "18px",
            fontWeight: "bold",
            color: "#333",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.5, delay: 1 } }}
        >
          List of games here
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Games;