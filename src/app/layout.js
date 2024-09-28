// app/layout.js
import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import Image from "next/image";
import Link from "next/link";
// import Footer from "@/components/footer"; // Import the Footer component

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Andrew Young Portfolio",
  description: "The best animated portfolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <div className="flex-grow ">
          <TransitionProvider>{children}</TransitionProvider>
        </div>
        {/* <Footer /> Include the Footer component */}
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
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </Link>
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
              />
              <Link href="https://www.linkedin.com/in/andrew-young-418177291/">
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
      </body>
    </html>
  );
}
