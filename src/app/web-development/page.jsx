"use client";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const DomainRegistration = () => {
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
        <h1 className="text-4xl font-bold mb-8 text-center">Web Development</h1>
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
              Professional registration of domain name with trusted hosting
              sites. <br />
              We create a professional and fully functional WordPress website
              tailored to your business needs. Our team of experts will handle
              everything from setup to customization, ensuring your site is
              visually appealing and user-friendly.
            </p>
            <h2>
              <b>Other Services</b>
            </h2>
            <div className="font-light mb-4">
              <ol className="space-y-4">
                <li>
                  <b>Security Enhancements:</b> Implement security measures to
                  protect your website from threats and vulnerabilities.
                </li>
                <li>
                  <b>Performance Optimization:</b> Optimize your website for
                  speed and performance to enhance user experience.
                </li>
                <li>
                  <b>Responsive Design:</b> Ensure your website is
                  mobile-friendly and looks great on all devices.
                </li>
                <li>
                  <b>Website Maintenance & Support:</b> Regular updates,
                  backups, and troubleshooting to keep your website running
                  smoothly.
                </li>
                <li>
                  <b>E-commerce Solutions:</b> Set up and customize WooCommerce
                  for your online store, including payment gateway integration.
                </li>
                <li>
                  <b>Responsive Design:</b> Ensure your website is
                  mobile-friendly and looks great on all devices.
                </li>
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

export default DomainRegistration;
