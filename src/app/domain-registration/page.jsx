"use client";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";

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
    <div className="h-full flex flex-col min-h-screen overflow-y-scroll p-4 sm:pb-6 bg-white">
      <div className="container mx-auto p-4 flex-grow">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Domain Registration
        </h1>
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
              Secure your unique domain name to establish your online presence.
              Choose from a wide range of domain extensions like .com, .net,
              .org, and more..
            </p>
            <h2>
              <b>Other Services</b>
            </h2>
            <div className="font-light mb-4">
              <ol className="space-y-4">
                <li>
                  <b>Domain Transfer:</b> Easily transfer your existing domain
                  to our platform with minimal downtime and hassle
                </li>
                <li>
                  <b>WHOIS Privacy Protection:</b> Keep your personal
                  information private by enabling WHOIS privacy protection.
                </li>
                <li>
                  <b>Domain Renewal:</b> Ensure your domain remains active by
                  setting up automatic renewals.
                </li>
                <li>
                  <b>DNS Management:</b> Manage your domain’s DNS settings to
                  control how your domain name is resolved on the internet.
                </li>
                <li>
                  <b>Domain Forwarding:</b> Redirect your domain to another
                  website or URL.
                </li>
                <li>
                  <b>Subdomain Creation:</b> Create subdomains to organize and
                  manage different sections of your website.
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
