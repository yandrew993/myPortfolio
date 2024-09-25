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
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 order-1 lg:order-2">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative order-first lg:order-none ">
          <Image src="/My-hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center order-2 lg:order-1">
          {/* TITLE */}
          <h1 className="lg:text-4xl md:text-6xl sm:text-3xl font-bold ">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
                View My Work
              </button>
            </Link>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contact Me
            </button>
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <footer className="bg-gray-800 text-white py-4 mt-8">
        <div className="container mx-auto flex flex-col items-center justify-between sm:flex-row">
          <div className="mt-4 sm:mt-0 px-2 flex space-x-4 mb-3">
            <Link href="/contact">My Work</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="flex space-x-4 mr-0">
            <Link href="#">
              <Image src="/facebook.png" alt="" width={24} height={24} />
            </Link>
            <Image src="/linkedin.png" alt="" width={24} height={24} />
            <Link href="#">
              <Image src="/instagram.png" alt="" width={24} height={24} />
            </Link>

            <Link href="#">
              <Image src="/pinterest.png" alt="" width={24} height={24} />
            </Link>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Homepage;
