"use client";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const GraphicDesign = () => {
  const { register, handleSubmit, reset } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (data) => {
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", data, "YOUR_USER_ID")
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setSuccessMessage("Your order has been placed successfully!");
          reset();
        },
        (err) => {
          console.log("FAILED...", err);
        }
      );
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
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
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 ">
                    Name
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: true })}
                    className="mt-1 block w-full rounded-md shadow-sm border-transparent outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className="mt-1 block w-full rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    {...register("message", { required: true })}
                    className="mt-1 block w-full rounded-md shadow-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                >
                  Submit
                </button>
              </form>
              {successMessage && (
                <p className="mt-4 text-green-500 text-center">
                  {successMessage}
                </p>
              )}
            </div>
          </div>
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
  );
};

export default GraphicDesign;
