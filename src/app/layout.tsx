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
          {!session ? (
            <div className="mx-4 mt-10 py-10 text-center text-2xl md:text-4xl text">
              Test
            </div>
          ) : (
            <div className="mx-4 mt-10 py-10 text-center text-2xl md:text-4xl text">
              Welcome to your session
            </div>
          )}
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
