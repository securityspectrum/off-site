import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

const Hero: React.FC = () => {
  return (
    <Parallax>
    <div className="relative h-screen flex items-center justify-center bg-blue-500">
      <motion.img
        src="/image3.jpg"
        alt="Image 1"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="absolute w-full h-full object-cover"
      />
      <motion.div
        className="relative z-10 text-white text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <h1 className="text-5xl font-bold mb-4">Welcome to Security Spectrum</h1>
        <p className="text-xl">A simple and light-weight SIEM platform with enhanced privacy for cybersecurity.</p>
      </motion.div>
    </div>
    </Parallax>
  );
};

export default Hero;