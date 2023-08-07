"use client";
import Login from "@/components/Login";

export default function LoginPage() {
  return (
    <>
      <section className="w-full">
        <div className="h-screen flex justify-center">
          <div className="mx-4 mt-10 py-10 text-center text-2xl md:text-4xl text">
            <Login />
          </div>
        </div>
      </section>
    </>
  );
}
