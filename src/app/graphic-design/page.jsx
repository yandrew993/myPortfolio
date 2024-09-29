"use client";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
const GraphicDesign = () => {
  return (
    <div className="h-full flex flex-col min-h-screen overflow-y-scroll bg-white pb-10">
      <div className="container mx-auto p-4 flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-center">Graphic Design</h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8 mb-4">
          <Image
            src="https://th.bing.com/th/id/OIP.BjzFdvESBeCYBP2NzUZCwQHaEK?rs=1&pid=ImgDetMain"
            alt="Windows Installation"
            width={600}
            height={400}
            className="mb-4 lg:mb-0"
          />
          <div className="lg:w-1/2">
            <p className="text-center lg:text-left mb-4">
              Professional installation of Windows operating systems. <br />
              We create visually compelling designs that effectively communicate
              your brand’s message. Our team of skilled designers will work with
              you to develop custom graphics that enhance your marketing
              materials, website, and overall brand identity.
            </p>
            <h2>
              <b>Other Services</b>
            </h2>
            <div className="font-light mb-4">
              <ol className="space-y-4">
                <li>
                  <b>Logo Design:</b> Develop a unique and memorable logo that
                  represents your brand
                </li>
                <li>
                  <b>Web Design:</b> Create visually appealing and user-friendly
                  website designs.
                </li>
                {/* <li>
                  <b>Driver Installation:</b> Ensuring all necessary drivers are
                  installed and up-to-date.
                </li>
                <li>
                  <b>Data Backup and Recovery:</b> Safeguarding your data before
                  installation and restoring it afterward.
                </li>
                <li>
                  <b>Software Installation:</b> Installing essential software
                  and applications as per user requirements.
                </li>
                <li>
                  <b>Security Setup:</b> Configuring antivirus and firewall
                  settings for enhanced security.
                </li> */}
              </ol>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;
