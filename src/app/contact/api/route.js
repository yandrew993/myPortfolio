import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Named export for the POST method
export async function POST(req) {
  const { name, email, message } = await req.json();

  // Nodemailer configuration
  const transporter = nodemailer.createTransport({
    service: "gmail", // or your chosen email provider
    auth: {
      user: process.env.RECEIVER_EMAIL, // your email from .env
      pass: process.env.APP_PASSWORD, // app password from .env
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender address
      to: process.env.RECEIVER_EMAIL, // your email (receiver) from .env
      subject: "New Contact Message", // Subject line
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 16px; line-height: 1.5; color: #333;">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Something went wrong." },
      { status: 500 }
    );
  }
}
