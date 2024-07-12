import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import FloatingButton from "@/components/shared/FloatingButton";

export const metadata: Metadata = {
  title: "State-of-the-art facility | Coworking Cube",
  description: "Coworking Cube was built with technology, focus, and comfort in mind. Just 5 minutes from the Makumbura Multimodal Center with multiple forms of transport, and ample parking within the Coworking Cube premises itself.",
  authors: [{ name: 'Geeth Wishkamal' }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <FloatingButton />
          <Footer />
        </div>
      </body>
    </html>
  );
}
