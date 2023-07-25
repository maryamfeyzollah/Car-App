import { Footer, NavBar } from "@/components";
import "./globals.css";
import type { Metadata } from "next";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Car App",
  description: "Discover the best cars",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
