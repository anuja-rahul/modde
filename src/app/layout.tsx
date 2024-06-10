import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./App.scss";
import Layout from "@/components/Layout/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MODDE",
  description: "World's first ever AI assisted fashion site.",
  icons: {
    icon: "./favicon.png", //public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
