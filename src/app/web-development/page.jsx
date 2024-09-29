"use client";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";

const DomainRegistration = () => {
  return (
    <div className="h-full flex flex-col min-h-screen overflow-y-scroll pb-10 bg-white">
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
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DomainRegistration;
