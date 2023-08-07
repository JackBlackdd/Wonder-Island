"use client";
import { signOut, useSession } from "next-auth/react";
export default function Home() {
  const session = useSession();
  return (
    <>
      <section className="w-full">
        <div className="h-screen flex justify-center">
          <h1 className="mx-4 mt-10 py-10 text-center text-2xl md:text-4xl text">
            Login test - working
          </h1>
        </div>
      </section>
    </>
  );
}
