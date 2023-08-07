"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session?.user?.email} <br />
        <button onClick={() => signOut()}>Logout</button>
      </>
    );
  }
  return (
    <>
      <button onClick={() => signIn("google")}>Login with Google</button>;
    </>
  );
}
