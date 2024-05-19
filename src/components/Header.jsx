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
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    Avatar,
    AvatarBadge,
    Flex,
    Box,
    Image,
    Text,
  } from "@chakra-ui/react";
  
  import { Link } from "react-router-dom";
  import { HamburgerIcon, SmallCloseIcon } from "@chakra-ui/icons";
  import { useState, useEffect } from "react";
  import logo from "../assets/logo.png";
  import profile1 from "../assets/profile1.jpg";
  import profile2 from "../assets/profile2.jpg";
  import { motion, AnimatePresence } from "framer-motion";
  
  function Header({ styleProp, menuColorProp }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
  
    const [isWorking, setIsWorking] = useState(false);
  
    useEffect(() => {
      if (isWorking) {
        setIsWorking(true);
      } else {
        // Simulate animation delay before closing
        setTimeout(() => {
          setIsWorking(false);
        }, 800);
      }
    }, [isWorking]);
  
    return (
      <div className="header" style={styleProp}>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader style={{ textAlign: "right" }}>
              أختار المستوى الدراسي
            </ModalHeader>
            <ModalBody
              style={{
                textAlign: "right",
                display: "flex",
                flexDirection: "column",
                padding: "10vh 10vw",
              }}
            >
              <Link to="/5">
                <Button
                  size="lg"
                  colorScheme="pink"
                  style={{ margin: "10px", width: "100%" }}
                >
                  السنة الخامسة
                </Button>
              </Link>
              <Link to="/6">
                <Button
                  size="lg"
                  colorScheme="pink"
                  style={{ margin: "10px", width: "100%" }}
                >
                  السنة السادسة
                </Button>
              </Link>
  
              <Button
                height="48px"
                width="200px"
                border="2px"
                borderColor="green.500"
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
  
        <Modal isOpen={isOpen2} onClose={() => setIsOpen2(false)} size="xl">
          <ModalOverlay />
          <ModalContent>
            <ModalHeader style={{ textAlign: "right" }}>
              أختار المستوى الدراسي
            </ModalHeader>
            <ModalBody
              style={{
                textAlign: "right",
                display: "flex",
                flexDirection: "column",
                padding: "10vh 10vw",
              }}
            >
              <Link to="/games/5">
                <Button
                  size="lg"
                  colorScheme="pink"
                  style={{ margin: "10px", width: "100%" }}
                >
                  السنة الخامسة
                </Button>
              </Link>
              <Link to="/games/6">
                <Button
                  size="lg"
                  colorScheme="pink"
                  style={{ margin: "10px", width: "100%" }}
                >
                  السنة السادسة
                </Button>
              </Link>
  
              <Button
                height="48px"
                width="200px"
                border="2px"
                borderColor="green.500"
                style={{ margin: "10px", width: "100%" }}
                onClick={() => setIsOpen2(false)}
              >
                إغلاق
              </Button>
            </ModalBody>
            <ModalFooter
              style={{ display: "flex", justifyContent: "flex-start" }}
            ></ModalFooter>
          </ModalContent>
        </Modal>
  
        <Modal isOpen={isOpen3} onClose={() => setIsOpen3(false)} size="xl">
          <ModalOverlay />
          <ModalContent borderRadius="20px" p="0">
            <ModalHeader
              textAlign="center"
              mt="20px"
              mb="4"
              fontSize="24px"
              fontWeight="bold"
              color="purple.500"
            >
              🤗 مع من تريد التحدث الآن ؟
            </ModalHeader>
            <ModalBody>
              <Flex justifyContent="center">
                <Box
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="lg"
                  mr="4"
                  w="300px"
                >
                  <Image src={profile1} alt="First Image" />
                  <Text
                    textAlign="center"
                    py="2"
                    fontSize="18px"
                    fontWeight="bold"
                  >
                    أريج
                  </Text>
                  <Link
                    to="/chat/arij"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Button colorScheme="purple" w="100%">
                      تحدث الآن ✨
                    </Button>
                  </Link>
                </Box>
  
                <Box
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                  boxShadow="lg"
                  ml="4"
                  w="300px"
                >
                  <Image src={profile2} alt="Second Image" />
                  <Text
                    textAlign="center"
                    py="2"
                    fontSize="18px"
                    fontWeight="bold"
                  >
                    غفران
                  </Text>
                  <Link
                    to="/chat/ghofrane"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Button colorScheme="purple" w="100%">
                      تحدث الآن ✨
                    </Button>
                  </Link>
                </Box>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="ghost"
                colorScheme="purple"
                w="100%"
                onClick={() => setIsOpen3(false)}
              >
                إغلاق
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
  
        <Link className="logo" to="/">
          <img src={logo} style={{ width: "50px" }} alt="logo" />
        </Link>
  
        <div className="big-screen">
          <div
            style={{
              marginRight: "7.5px",
              marginLeft: "7.5px",
              cursor: "pointer",
              color: "black",
            }}
            onClick={() => setIsOpen(true)}
          >
            الدروس 📚
          </div>
          <div
            style={{
              marginRight: "7.5px",
              marginLeft: "7.5px",
              cursor: "pointer",
              color: "black",
            }}
            onClick={() => setIsOpen2(true)}
          >
            الألعاب 🎮
          </div>
  
          <div
            style={{ marginRight: "7.5px", marginLeft: "7.5px", color: "black" }}
          >
            <Link to="/videos">الفديوهات 🎬</Link>
          </div>
          <div
            style={{ marginRight: "7.5px", marginLeft: "7.5px", color: "black" }}
          >
            <a href="https://heyzine.com/flip-book/f3aab0d464.html">الموسوعة 📖</a>
          </div>
          <div
            style={{ marginRight: "7.5px", marginLeft: "7.5px", color: "black" }}
          >
            <Link to="/app">التطبيق 📱</Link>
          </div>
          
          <div
            style={{
              marginRight: "7.5px",
              marginLeft: "7.5px",
              cursor: "pointer",
              color: "black",
            }}
            onClick={() => setIsOpen3(true)}
          >
            محادثة 💬
          </div>
        </div>
        <div className="small-screen">
          <IconButton
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
            onClick={() => setIsWorking(true)} // Open the drawer on button click
          />
  
          {/* Drawer */}
  
          <Drawer
            placement="left"
            onClose={() => setIsWorking(false)}
            isOpen={isWorking}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px" textAlign="right">
                عناصر الموقع
              </DrawerHeader>
              <DrawerBody style={{ marginTop: "20px", marginRight: "20px" }}>
                <motion.div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "25px", // Adjust spacing as needed
                    textAlign: "right",
                    fontSize: "1.4em",
                  }}
                >
                  <motion.div
                    onClick={() => {
                      setIsOpen(true);
                      setIsWorking(false);
                    }}
                    key="1"
                  >
                    الدروس 📚
                  </motion.div>
                  <Link to="/games">
                    <motion.div key="2" transition={{ duration: 0.4 }}>
                      الألعاب 🎮
                    </motion.div>
                  </Link>
                  <Link to="/videos">
                    <motion.div key="3" transition={{ duration: 0.6 }}>
                      الفديوهات 🎬
                    </motion.div>
                  </Link>
                  <a href="https://heyzine.com/flip-book/f3aab0d464.html">
                    <motion.div key="4" transition={{ duration: 0.6 }}>
                    الموسوعة 📖
                    </motion.div>
                  </a>
                  <Link to="/app">
                    <motion.div key="5" transition={{ duration: 0.6 }}>
                    التطبيق 📱
                    </motion.div>
                  </Link>
                
                  <Link to="/chat/arij">
                    <div>
                      تحدث مع أريج
                      <Avatar
                        src={profile1}
                        size="sm"
                        style={{ marginLeft: "8px" }}
                      >
                        <AvatarBadge boxSize="1.25em" bg="green.500" />
                      </Avatar>
                    </div>
                  </Link>
                  <Link to="/chat/ghofrane">
                    تحدث مع غفران
                    <Avatar
                      src={profile2}
                      size="sm"
                      style={{ marginLeft: "8px" }}
                    >
                      <AvatarBadge boxSize="1.25em" bg="green.500" />
                    </Avatar>
                  </Link>
                </motion.div>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    );
  }
  
  export default Header;