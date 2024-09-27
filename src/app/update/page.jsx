"use client";
import Image from "next/image";
import Link from "next/link";

const Update = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4 sm:text-2xl">
          We'll be back soon!
        </h1>
        <p className="text-lg text-gray-700 sm:text-font-light pr-4 pl-4">
          Sorry for the inconvenience but we're performing some maintenance at
          the moment. We'll be back online shortly!
        </p>
      </div>
      {/* FOOTER */}
      <footer className="bg-gray-800 text-white py-4 mt-6 w-full">
        <div className="container mx-auto flex flex-col items-center justify-between sm:flex-row">
          <div className="mt-4 sm:mt-0 px-2 flex space-x-4 mb-3">
            <Link href="/contact">My Work</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
          <div className="flex space-x-4 md:mr-8">
            <Link href="#">
              <Image
                src="/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </Link>
            <Image src="/linkedin.png" alt="LinkedIn" width={24} height={24} />
            <Link href="#">
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </Link>
            <Link href="#">
              <Image
                src="/pinterest.png"
                alt="Pinterest"
                width={24}
                height={24}
              />
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

export default Update;
