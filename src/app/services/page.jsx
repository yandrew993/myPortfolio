"use client";
import { motion, useScroll } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const services = [
  {
    title: "OS Installation",
    description: "Professional installation of Windows operating systems.",
    image:
      "https://th.bing.com/th/id/OIP.BjzFdvESBeCYBP2NzUZCwQHaEK?rs=1&pid=ImgDetMain",
    link: "/windows-installation",
  },
  {
    title: "Domain Registration",
    description: "Registration of domain name with trusted hosting sites.",
    image:
      "https://th.bing.com/th/id/OIP.BjzFdvESBeCYBP2NzUZCwQHaEK?rs=1&pid=ImgDetMain",
    link: "/domain-registration",
  },
  {
    title: "Web Development",
    description: "Professional installation of Windows operating systems.",
    image:
      "https://th.bing.com/th/id/OIP.BjzFdvESBeCYBP2NzUZCwQHaEK?rs=1&pid=ImgDetMain",
    link: "/web-development",
  },
  {
    title: "Graphic Design",
    description: "Professional installation of Windows operating systems.",
    image:
      "https://th.bing.com/th/id/OIP.BjzFdvESBeCYBP2NzUZCwQHaEK?rs=1&pid=ImgDetMain",
    link: "/graphic-design",
  },
  {
    title: "Freelancing",
    description: "Professional installation of Windows operating systems.",
    image:
      "https://th.bing.com/th/id/OIP.BjzFdvESBeCYBP2NzUZCwQHaEK?rs=1&pid=ImgDetMain",
    link: "/windows-installation",
  },
  {
    title: "Windows Installation",
    description: "Professional installation of Windows operating systems.",
    image:
      "https://th.bing.com/th/id/OIP.BjzFdvESBeCYBP2NzUZCwQHaEK?rs=1&pid=ImgDetMain",
    link: "/windows-installation",
  },
  // Add other services here...
];

const Services = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div
        className="flex flex-col min-h-screen overflow-y-scroll bg-white"
        ref={containerRef}
      >
        <div className="container mx-auto p-4 flex-grow">
          <h1 className="text-4xl font-bold mb-8">My Services</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 shadow-lg bg-blue"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                <p className="mb-4">{service.description}</p>
                <Link href={service.link}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Book Now
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* FOOTER */}
        <footer className="bg-gray-800 text-white py-4 mt-6">
          <div className="container mx-auto flex flex-col items-center justify-between sm:flex-row">
            <div className="mt-4 sm:mt-0 px-2 flex space-x-4 mb-3">
              <Link href="/contact">My Work</Link>
              <Link href="/about">About</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
            </div>
            <div className="flex space-x-4 md:mr-8">
              <Link href="#">
                <Image src="/facebook.png" alt="" width={24} height={24} />
              </Link>
              <Image src="/linkedin.png" alt="" width={24} height={24} />
              <Link href="https://www.linkedin.com/in/andrew-young-418177291/">
                <Image src="/instagram.png" alt="" width={24} height={24} />
              </Link>
              <Link href="#">
                <Image src="/pinterest.png" alt="" width={24} height={24} />
              </Link>
            </div>
          </div>
          <p className="italic mt-2 text-center md:text-right md:mr-8 text-xs font-light">
            powered by andrewyoungokeyo@2024
          </p>
        </footer>
      </div>
    </motion.div>
  );
};

export default Services;
