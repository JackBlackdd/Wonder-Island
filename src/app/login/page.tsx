"use client";
import Login from "@/components/Login";
import { useSession } from "next-auth/react";

export default function LoginPage() {
  const { data: session } = useSession();
  return (
    <>
      <section className="w-full">
        <div className="h-screen flex justify-center">
          <div className="mx-4 mt-10 py-10 text-center text-2xl md:text-4xl text">
          Signed in as {session?.user?.email} <br />
          <br />
            <Login />
          </div>
        </div>
      </section>
    </>
  );
}
