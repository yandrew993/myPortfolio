"use client";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        () => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* TEXT CONTAINER */}
        <div className="h-1/3 lg:h-full lg:w-1/2 flex items-center justify-center text-3xl lg:text-6xl md:text-5xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-2/3 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 justify-center p-24"
        >
          <span>Dear Andrew Young,</span>
          <textarea
            rows={2}
            className="sm:py-4 bg-transparent border-b-2 outline-none border-b-black block py-4 resize-none"
            name="user_message"
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Regards</span>
          <button className="bg-purple-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
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
    </motion.div>
  );
};

export default ContactPage;
