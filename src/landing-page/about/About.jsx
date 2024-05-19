import "./About.css";
import pic1 from "../../assets/pic_1.svg";
import Sections from "../sections/Sections";
import Social from "../social-media/Social"
import Testimonials from "../testimonials/Testimonials";
import Pfe from "../pfe/Pfe";
import {useEffect, useRef} from "react"
import { motion, useAnimation } from "framer-motion";

function About() {
  const headerControls = useAnimation();
  const paragraphControls = useAnimation();
  const imageControls = useAnimation();

  const headerRef = useRef(null);
  const paragraphRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const headerTop = headerRef.current.offsetTop;
      const paragraphTop = paragraphRef.current.offsetTop;
      const imageTop = imageRef.current.offsetTop;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > headerTop - windowHeight / 2) {
        headerControls.start({ opacity: 1, y: 0 });
      }

      if (scrollPosition > paragraphTop - windowHeight / 2) {
        paragraphControls.start({ opacity: 1, y: 0 });
      }

      if (scrollPosition > imageTop - windowHeight / 2) {
        imageControls.start({ opacity: 1, y: 0 });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headerControls, paragraphControls, imageControls]);

  return (
    <div className="About">
<h2
        className="about-header"
        style={{ marginLeft: "40px", marginRight: "40px" }}
        ref={headerRef}
      >
        <motion.div initial={{ opacity: 0, y: 50 }} animate={headerControls}>
          موقع "بوابة العلوم" هو رحلة مبتكرة لفهم العلوم بسهولة وفاعلية
        </motion.div>
      </h2>
      <section className="section-1" style={{ marginLeft: "40px", marginRight: "40px" }}>
        <div className="section-1-description" ref={paragraphRef}>
          <motion.p initial={{ opacity: 0, y: 50 }} animate={paragraphControls}>
            استعد لاكتشاف عالم العلوم بطريقة فريدة وشيقة عبر هذا الموقع. نقدم لك
            مرجعًا تعليميًا ممتعًا وتفاعليًا يستهدف طلاب السنتين الخامسة
            والسادسة، حيث نسعى جاهدين لجعل عملية التعلم تجربة مثيرة وسهلة الفهم.
            تقدم البوابة محتوى شامل يغطي مختلف مجالات العلوم، بدءًا من علوم
            الحياة وصولًا إلى الفيزياء والكيمياء
          </motion.p>
        </div>
        <div className="section-1-pic" ref={imageRef}>
          <motion.img
            src={pic1}
            alt="Description"
            initial={{ opacity: 0, y: 50 }}
            animate={imageControls}
          />
        </div>
      </section>
      <div style={{marginLeft: "40px", marginRight: "40px"}}>
        <Sections />
      </div>
      <div className="hide-on-phone" style={{marginLeft: "40px", marginRight: "40px"}}>
        <Testimonials />
      </div>
      <div className="hide-on-phone" style={{marginLeft: "40px", marginRight: "40px"}}>
        <Pfe />
      </div>
      <Social />
    </div>
  );
}

export default About;