import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";
import { text } from "stream/consumers";

const imageVariants = {
  hidden: { opacity: 0, y: "5vh" },
  visible: { opacity: 1, y: 0 },
};

const ProductAnimation: React.FC = () => {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const [opacity, setOpacity] = useState(1);
  const [opacity2, setOpacity2] = useState(1);
  const ref = useRef<HTMLDivElement>(null);

  const imageVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    // ... (any other variants you might have)
  };

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const newOpacity = 1 - scrollPosition / maxScroll;
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container mx-auto px-4">
      <Parallax speed={15} startScroll={0}>
        <div className="flex flex-col space-y-16 md:space-y-24">
          {/* <div className="h-[35vh] w-full p-[1vw]"> */}
          <motion.div className="flex flex-col md:flex-row items-center md:space-x-5 md:space-y-25">
            <div className="relative">
              <motion.img
                src="screen-captures/app-events-pseudonymized.png"
                alt="Cybersecurity Image 2"
                className={`cursor-pointer rounded-lg ${
                  isEnlarged ? "w-[100%] h-[100%]" : " md:w-3/4"
                }`}
                onClick={() => setIsEnlarged(!isEnlarged)}
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                transition={{ duration: 0.8 }}
              />
              {isEnlarged && <div onClick={() => setIsEnlarged(false)}></div>}
            </div>
            <Parallax
              translateY={[50, 10]}
              speed={15}
              startScroll={30}
              easing="easeIn"
            >
              <div
                className="h-[5vh] p-[1vw]"
                style={{ opacity: opacity }}
              >
                <motion.p
                  className="md:text-4xl font-thin md:text-center text-gray-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <span className="md:text-4xl font-thin md:text-left text-indigo-300 whitespace-nowrap block">
                    Privacy by default
                  </span>
                  <span className="md:text-4xl font-semibold md:text-left text-violet-400 block">
                    Sensitive data pseudonymized
                  </span>
                </motion.p>
              </div>
            </Parallax>
          </motion.div>
          {/* </div> */}
        </div>
      </Parallax>
      <Parallax speed={15} startScroll={0}>
        <div className="flex flex-col space-y-16 md:space-y-24">
          {/* <div className="h-[25vh] w-full p-[1vw]"> */}
          <motion.div className="flex flex-col md:flex-row items-center md:space-x-5 md:space-y-25">
            <div className="relative">
              <motion.img
                src="screen-captures/app-privacy-fields4.png"
                alt="Cybersecurity Image 2"
                className={`cursor-pointer rounded-lg ${
                  isEnlarged ? "w-[100%] h-[100%]" : " md:w-3/4"
                }`}
                onClick={() => setIsEnlarged(!isEnlarged)}
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                transition={{ duration: 0.8 }}
              />
              {isEnlarged && <div onClick={() => setIsEnlarged(false)}></div>}
            </div>
            <Parallax
              translateY={[50, 10]}
              speed={25}
              startScroll={30}
              easing="easeIn"
            >
              <div
                className="relative h-[4vh] p-[1vw]"
                // style={{ opacity: opacity }}
              >
                <motion.p
                  className="md:text-4xl font-thin md:text-center text-gray-100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <span className="md:text-4xl font-thin md:text-left text-indigo-300 whitespace-nowrap block">
                    Configure your Privacy
                  </span>
                  <span className="md:text-4xl font-semibold md:text-left text-violet-400 whitespace-nowrap block">
                    To protect your data
                  </span>
                </motion.p>
              </div>
            </Parallax>
          </motion.div>
          {/* </div> */}
        </div>
      </Parallax>
      <Parallax speed={15} startScroll={0}>
        <div className="flex flex-col space-y-16 md:space-y-24">
          {/* <div className="h-[25vh] w-full p-[1vw]"> */}
          <motion.div className="flex flex-col md:flex-row items-center md:space-x-5 md:space-y-25">
            <div className="relative">
              <motion.img
                src="screen-captures//app-events-clear.png"
                alt="Cybersecurity Image 1"
                className={`cursor-pointer rounded-lg ${
                  isEnlarged ? "w-[100%] h-[100%]" : " md:w-3/4"
                }`}
                onClick={() => setIsEnlarged(!isEnlarged)}
                initial="hidden"
                animate="visible"
                variants={imageVariants}
                transition={{ duration: 0.8 }}
              />
              {isEnlarged && <div onClick={() => setIsEnlarged(false)}></div>}
            </div>
            <Parallax
              translateY={[50, 10]}
              speed={25}
              startScroll={30}
              easing="easeOut"
            >
              <div
                className="relative h-[5vh] p-[3vw]"
                // style={{ opacity: opacity }}
              >
                <motion.p
                  className="md:text-4xl font-thin md:text-left text-indigo-300 block"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <span>New and improved SIEM platform</span>
                  <span className="md:text-4xl font-semibold md:text-left text-violet-400 whitespace-nowblockrap block">
                    That is easy to use
                  </span>
                </motion.p>
              </div>
            </Parallax>
          </motion.div>
          {/* </div> */}
        </div>
      </Parallax>
    </div>
  );
};

export default ProductAnimation;
