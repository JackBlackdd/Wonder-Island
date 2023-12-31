import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

import { authOptions } from "../../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import SessionProvider from "./SessionProvider";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IslandWonderland",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <Navbar />
          
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
