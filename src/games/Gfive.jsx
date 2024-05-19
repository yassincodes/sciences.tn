import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    Button,
  } from "@chakra-ui/react";
  import { useState } from "react";
  import Header from "../components/Header";
  import { motion } from "framer-motion";
  
  function Gfive() {
    const eyeSVG = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-eye"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#2c3e50"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="12" r="2" />
        <path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7" />
      </svg>
    );
  
    const downloadSVG = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-download"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#2c3e50"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
        <polyline points="7 11 12 16 17 11" />
        <line x1="12" y1="4" x2="12" y2="16" />
      </svg>
    );
  
    const exercicesSVG = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-brand-apple-arcade"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#2c3e50"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="12" cy="5" r="2" />
        <path d="M20 12.5v4.75a0.734 .734 0 0 1 -.055 .325a0.704 .704 0 0 1 -.348 .366l-5.462 2.58a4.998 4.998 0 0 1 -4.27 0l-5.462 -2.58a0.705 .705 0 0 1 -.401 -.691l-.002 -4.75" />
        <path d="M4.431 12.216l5.634 -2.332a5.065 5.065 0 0 1 3.87 0l5.634 2.332a0.692 .692 0 0 1 .028 1.269l-5.462 2.543a5.064 5.064 0 0 1 -4.27 0l-5.462 -2.543a0.691 .691 0 0 1 .028 -1.27z" />
        <line x1="12" y1="7" x2="12" y2="13" />
      </svg>
    );
    const array = [
      {
        title: "الهيكل العظمي",
        color: "#E2E2E2",
        fileLink:
          "https://drive.google.com/file/d/1fX2Y2MfA9CTncNv9qFO7oxFjKvb9k3Yy/view?usp=sharing",
        firstGameLink: "",
        secondGameLink: "",
      },
      {
        title: "الدورة الدموية",
        color: "#D5E5F5",
        fileLink:
          "https://drive.google.com/file/d/16WjlLZwued5sCuLLvoP2mtcBSQ3muem1/view?usp=sharing",
        firstGameLink: "",
        secondGameLink: "",
      },
      {
        title: "الجهاز التنفسي",
        color: "#FFC0CB",
        fileLink:
          "https://drive.google.com/file/d/1kEeQdKMCzIJg7DUa-n-nMHo8MEzFW0q2/view?usp=sharing",
        firstGameLink: "",
        secondGameLink: "",
      },
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLesson, setSelectedLesson] = useState(null);
  
    return (
      <div>
        <div>
          <Header
            menuColorProp={{ color: "black" }}
            styleProp={{
              color: "black",
              backdropFilter: "blur",
              transition: "all 0.3s ease-out",
              position: "fixed",
              background: "#ffffff88",
              borderBottom: "1px solid #11111111",
            }}
          />
        </div>
        <div
          style={{
            textAlign: "right",
            paddingTop: "13vh",
            marginRight: "10vw",
            marginLeft: "10vw",
            fontSize: "1.3em",
            cursor: "pointer",
          }}
        >
          <div
            style={{
              margin: "20px",
              marginTop: "10px",
              width: "80vw",
              borderRadius: "10px",
              padding: "20px",
              cursor: "pointer",
              textAlign: "center",
              textDecoration: "underline",
            }}
          >
            إختر الدرس ثم إبدأ اللعب
          </div>
          {array.map((lesson, index) => (
            <motion.div
              key={index}
              style={{
                margin: "20px",
                width: "80vw",
                borderRadius: "10px",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                background: lesson.color,
                padding: "20px",
                cursor: "pointer",
                textAlign: "center",
              }}
              onClick={() => {
                setSelectedLesson(lesson);
                setIsOpen(true);
              }}
              initial={{ scale: 0.8, opacity: 0 }} // Initial state: scaled down and hidden
              animate={{ scale: 1, opacity: 1 }} // Animate to full size and fully visible
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: index * 0.2,
              }} // Spring animation with delay
              whileHover={{ scale: 1.05 }} // Scale up on hover
              whileTap={{ scale: 0.95 }} // Scale down slightly when tapped
            >
              <h3 style={{ margin: 0, fontWeight: "bold" }}>{lesson.title}</h3>
              {/* Add other elements if necessary */}
            </motion.div>
          ))}
          {selectedLesson && (
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="xl">
              <ModalOverlay />
              <ModalContent>
                <ModalHeader style={{ textAlign: "right" }}>
                  {selectedLesson.title}
                </ModalHeader>
                <ModalBody
                  style={{
                    textAlign: "right",
                    display: "flex",
                    flexDirection: "column",
                    padding: "10vh 10vw",
                  }}
                >
                  <Button
                    style={{ margin: "10px", width: "100%", textAlign: "right" }}
                    onClick={() => window.open(selectedLesson.fileLink, "_blank")}
                  >
                    <p style={{ marginRight: "5px", width: "55%" }}>فتح الدرس</p>
                    {eyeSVG}
                  </Button>
  
                  <Button
                    style={{
                      margin: "10px",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "right",
                    }}
                    onClick={() =>
                      window.open(
                        `https://drive.google.com/u/0/uc?id=${
                          selectedLesson.fileLink.split("/")[5]
                        }&export=download`,
                        "_blank"
                      )
                    }
                  >
                    <div style={{ marginRight: "5px", width: "55%" }}>
                      {" "}
                      تحميل الدرس{" "}
                    </div>
                    <div>{downloadSVG}</div>
                  </Button>
  
                  {selectedLesson.firstGameLink ? (
                    <Button
                      style={{
                        margin: "10px",
                        width: "100%",
                        textAlign: "right",
                      }}
                      onClick={() =>
                        window.open(selectedLesson.firstGameLink, "_blank")
                      }
                    >
                      <div style={{ marginRight: "5px", width: "55%" }}>
                        {" "}
                        تمرين تطبيقي
                      </div>
                      <div>{exercicesSVG}</div>
                    </Button>
                  ) : (
                    ""
                  )}
  
                  <Button
                    colorScheme="blue"
                    style={{ margin: "10px", width: "100%" }}
                    onClick={() => setIsOpen(false)}
                  >
                    إغلاق
                  </Button>
                </ModalBody>
                <ModalFooter
                  style={{ display: "flex", justifyContent: "flex-start" }}
                ></ModalFooter>
              </ModalContent>
            </Modal>
          )}
        </div>
      </div>
    );
  }
  
  export default Gfive;