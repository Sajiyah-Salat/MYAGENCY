
// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer"

// export async function POST(req) {
//   try {
//     const { name, email, message } = await req.json();

//     if (!name || !email || !message) {
//       return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
//     }

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: `salatsajiya7.8.6@gmail.com`,
//         pass: `apoy dzyo tdca gatg`,
//       },
//     });

//     await transporter.sendMail({
//       from: process.env.EMAIL_USER,
//       to: process.env.EMAIL_USER,
//       subject: `New Contact Form Submission from ${name}`,
//       text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//       html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
//     });

//     return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
//   } catch (error) {
//     console.error("Error sending email:", error);
//     return NextResponse.json({ success: false, message: "Error sending email" }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
            return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: `salatsajiya7.8.6@gmail.com`,
                pass: `apoy dzyo tdca gatg`,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: `New Contact Form Submission from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
            html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
        });

        return NextResponse.json({ success: true, message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ success: false, message: "Error sending email" }, { status: 500 });
    }
}


// export default async function handler(req, res) {
//     if (req.method !== "POST") {
//         return res.status(405).json({ message: "Method Not Allowed" });
//     }

//     const { name, email, message } = req.body;

//     if (!name || !email || !message) {
//         return res.status(400).json({ message: "Missing required fields" });
//     }

//     try {
//         const transporter = nodemailer.createTransport({
//             service: "gmail",
//             auth: {
//                 user: `salatsajiya7.8.6@gmail.com`,
//                 pass: `apoy dzyo tdca gatg`,
//             },
//         });

//         await transporter.sendMail({
//             from: process.env.EMAIL_USER,
//             to: process.env.EMAIL_USER,
//             subject: `New Contact Form Submission from ${name}`,
//             text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//             html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
//         });

//         res.status(200).json({ success: true, message: "Email sent successfully" });
//     } catch (error) {
//         console.error("Error sending email:", error);
//         res.status(500).json({ success: false, message: "Error sending email" });
//     }
// }
