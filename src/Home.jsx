import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DNA } from "react-loader-spinner";
import Header from "./components/Header";
import Front from "./landing-page/front-page/Front";
import About from "./landing-page/about/About";
import Section from "./landing-page/sections/Sections";

function Home() {
  const [showParagraph, setShowParagraph] = useState(true);
  const [showTopContent, setShowTopContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowParagraph(false);
      setShowTopContent(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div>
        {showParagraph && (
          <div>
            <motion.div
              className="before_Home"
              style={{
                height: "70vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DNA
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
              />
            </motion.div>
            <div style={{ textAlign: "center" }}>
              <div className="loading-text">جاري تحميل الموقع</div>
            </div>
          </div>
        )}

        {showTopContent && (
          <>
            <div className="Home">
              <Header />
              <Front />
            </div>
            <div>
              <About />
            </div>
            
          </>
        )}``
      </div>
    </div>
  );
}

export default Home;