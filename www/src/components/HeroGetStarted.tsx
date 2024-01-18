import { motion } from "framer-motion";
import { Parallax } from "react-scroll-parallax";

export default function HeroSection() {
  return (
    <Parallax speed={10} easing="easeOut">
      <section className="bg-gray-900 text-white h-screen flex flex-col justify-center items-center mt-[90px] md:mt-[90px]">
        <h1 className="text-5xl font-extrabold mb-4">
          Secure Your Digital World
        </h1>
        <p className="text-xl mb-8">Try-out our new SIEM platform</p>
        <button className="px-6 py-3 bg-blue-500 text-white rounded-full">
          Try now!
        </button>
      </section>
    </Parallax>
  );
}
