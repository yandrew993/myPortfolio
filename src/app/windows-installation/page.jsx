"use client";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";

const WindowsInstallation = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col min-h-screen overflow-y-scroll bg-white pb-10">
        <div className="container mx-auto p-4 flex-grow">
          <h1 className="text-4xl font-bold mb-8 text-center">
            OS Installation
          </h1>
          <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 mb-4">
            <Image
              src="/Windows.png"
              alt="Windows Installation"
              width={600}
              height={400}
              className="mb-4 lg:mb-0 rounded"
            />
            <div className="lg:w-1/2">
              <p className="text-center lg:text-left mb-4">
                We specialize in providing top-notch OS installation services to
                ensure your system runs smoothly and efficiently. But that’s not
                all! We offer a wide range of additional services to meet all
                your tech needs. Explore our offerings below: world.
              </p>
              <h2>
                <b>OS Installation Services</b>
              </h2>
              <div className="font-light mb-4">
                <ol className="space-y-4">
                  <li>
                    <b>Operating System Installation:</b> Installation of the
                    latest versions of Windows, macOS, or Linux.
                  </li>
                  <li>
                    <b>System Configuration:</b> Customizing system settings to
                    optimize performance and usability.
                  </li>
                  <li>
                    <b>Driver Installation:</b> Ensuring all necessary drivers
                    are installed and up-to-date.
                  </li>
                  <li>
                    <b>Data Backup and Recovery:</b> Safeguarding your data
                    before installation and restoring it afterward.
                  </li>
                  <li>
                    <b>Software Installation:</b> Installing essential software
                    and applications as per user requirements.
                  </li>
                  <li>
                    <b>Security Setup:</b> Configuring antivirus and firewall
                    settings for enhanced security.
                  </li>
                </ol>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WindowsInstallation;
