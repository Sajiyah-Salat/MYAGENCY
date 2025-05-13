import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RKWEB | DevOps Agency",
  description: "RKWEB is a modern DevOps agency specializing in streamlined deployment, infrastructure automation, and scalable solutions. Built with precision by Sajiya Salat.",
  authors: [{ name: "Sajiya Salat", url: "https://therkweb.tech/" }],
  keywords: ["DevOps", "RKWEB", "Cloud", "Automation", "Infrastructure", "CI/CD", "Sajiya Salat", "Agency"],
  creator: "Sajiya Salat",
  publisher: "RKWEB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
