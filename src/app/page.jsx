"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import TextAnimation from "@/components/TextAnimation";

const Homepage = () => {
  return (
    <motion.div
      className="flex flex-col min-h-screen"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* WELCOME HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full bg-white py-8 px-4 text-center"
      >
        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">
          Hello👋 Welcome Home
        </h2>
        <p className="text-lg md:text-xl text-gray-700 font-semibold">
          Where we turn every <span className="text-blue-600 italic">problem into a solution</span>
        </p>
      </motion.div>

      <div className="flex-grow overflow-y-auto flex flex-col lg:flex-row px-2 sm:px-4 md:px-6 lg:px-8 xl:px-16  bg-gray-100 pb-20">
        {/* IMAGE CONTAINER */}
        <div className="w-full lg:w-1/2 h-auto relative py-8 lg:py-0 lg:order-none mr-0 lg:mr-4 flex items-center justify-center">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:w-full lg:h-[500px]">
            <Image
              src="/Y5.jpg"
              alt="Portfolio"
              fill
              className="object-contain rounded-lg bg-black"
              priority
            />
          </div>
        </div>
        {/* TEXT CONTAINER */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6 md:gap-8 items-center justify-center lg:order-1 py-8 lg:py-0">
          {/* TITLE */}
          
          {/* DESC */}
          
          {/* MESSAGE TO CLIENTS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.2 }}
            className="mt-4 sm:mt-2s md:mt-8 p-4 sm:p-5 md:p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-500 w-full max-w-2xl mx-2 sm:mx-4"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-3">My Message To You</h3>
            <div style={{
              fontSize: '1.15rem',
              color: '#808080',
              fontStyle: 'italic',
              fontWeight: '400',
              lineHeight: '1.7',
            }}>
              {`Development is not just about writing code, but about crafting meaningful digital solutions that inspire growth, enhance user experience, and empower businesses to achieve their goals. My journey as a developer has been guided by a passion for innovation and a commitment to delivering excellence in every project I undertake. Whether it's building stunning websites, designing compelling graphics, or providing technical expertise.`
                .split("")
                .map((letter, index) => {
                  const text = `Development is not just about writing code, but about crafting meaningful digital solutions that inspire growth, enhance user experience, and empower businesses to achieve their goals. My journey as a developer has been guided by a passion for innovation and a commitment to delivering excellence in every project I undertake. Whether it's building stunning websites, designing compelling graphics, or providing technical expertise.`;
                  const totalLetters = text.length;
                  const fadeOutDuration = totalLetters * 0.05 + 2;
                  const pauseDuration = 15;
                  const totalDuration = fadeOutDuration + pauseDuration;

                  return (
                    <motion.span
                      key={index}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: [1, 1, 0] }}
                      transition={{
                        duration: totalDuration,
                        repeat: Infinity,
                        delay: index * 0.05,
                        times: [0, fadeOutDuration / totalDuration, 1],
                      }}
                    >
                      {letter}
                    </motion.span>
                  );
                })}
            </div>
          </motion.div>
          {/* BUTTONS */}
          <div className="w-full flex gap-4 justify-center">
            <Link href="/services">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                My Services
              </button>
            </Link>
            <Link href="/about">
              <button className="p-4 rounded-lg ring-1 ring-black">
                About Me
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* VIDEO SECTION */}
      <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 xl:px-16 bg-gray-100 py-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden bg-gray-200 shadow-2xl">
            <video
              width="100%"
              height="100%"
              autoPlay
              muted
              loop
              className="w-full h-full object-contain rounded-lg"
              poster="/thumbnail.jpg"
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
