"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full overflow-y-scroll flex flex-col lg:flex-row px-2 sm:px-4 md:px-6 lg:px-8 xl:px-16 order-1 lg:order-2 bg-gray-100">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative order-first lg:order-none mr-4">
          <Image
            src="/Y5.jpg"
            alt=""
            fill
            className="object-contain rounded-lg bg-black mt-4"
          />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center order-2 lg:order-1">
          {/* TITLE */}
          <h1 className="lg:text-4xl md:text-6xl sm:text-3xl font-bold text-center">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          {/* DESC */}
          <p className="md:text-xl text-center">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 justify-center">
            <Link href="/services">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                My Services
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-black">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
