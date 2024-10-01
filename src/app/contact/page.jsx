// src/app/contact/page.js
"use client";
import ContactForm from "../../components/ContactForm";
import { motion } from "framer-motion";

export default function ContactPage() {
  const text = "Say hello to Andrew ";
  return (
    <motion.div
      className="h-full overflow-y-scroll bg-gray-100"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="text-center text-4xl mt-4 text-black">
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
          👋
        </div>
      </div>
      <ContactForm />
    </motion.div>
  );
}
