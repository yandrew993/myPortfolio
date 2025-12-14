"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import TextAnimation from "@/components/TextAnimation";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full  overflow-y-scroll flex flex-col lg:flex-row px-2 sm:px-4 md:px-6 lg:px-8 xl:px-16  bg-gray-100 pb-20">
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
          
          {/* DESC */}
          
          {/* MESSAGE TO CLIENTS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 p-6 bg-white rounded-lg shadow-md border-l-4 border-blue-500 max-w-2xl"
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
    </motion.div>
  );
};

export default Homepage;
