"use client";
import { useSession } from "next-auth/react";
export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <section className="w-full">
        <div className="h-screen flex justify-center">
          <h1 className="mx-4 mt-10 py-10 text-center text-2xl md:text-4xl text">
            {!session ? (
              <div className="mx-4 mt-10 py-10 text-center text-2xl md:text-4xl text">
                Welcome extranger!
              </div>
            ) : (
              <div className="mx-4 mt-10 py-10 text-center text-2xl md:text-4xl text">
                Welcome to your session {session?.user?.name} <br />
              </div>
            )}
            Login test - working
          </h1>
        </div>
      </section>
    </>
  );
}
