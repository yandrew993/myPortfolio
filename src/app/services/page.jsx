"use client";
import { motion, useScroll } from "framer-motion";

import Link from "next/link";
import { useRef } from "react";

const services = [
  {
    title: "OS Installation",
    description: "Professional installation of Windows operating systems.",
    image: "/Windows.png",
    link: "/windows-installation",
  },
  {
    title: "Domain Registration",
    description: "Registration of domain name with trusted hosting sites.",
    image: "/Registration.png",
    link: "/domain-registration",
  },
  {
    title: "Web Development",
    description: "Professional installation of Windows operating systems.",
    image: "/Web dev.png",
    link: "/web-development",
  },
  {
    title: "Graphic Design",
    description: "Professional installation of Windows operating systems.",
    image: "/Graphic.jpg",
    link: "/graphic-design",
  },
  {
    title: "Freelancing",
    description: "Professional installation of Windows operating systems.",
    image: "/Freelancer.jpg",
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
      <div className="h-full  overflow-y-scroll bg-white">
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
      </div>
    </motion.div>
  );
};

export default Services;
