import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Nav = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <div className="flex w-full h-12 justify-center align-middle bg-white text-xl font-bold tracking-tight md:tracking-tighter leading-tight ">
          <div className="absolute top-4 left-10">{session?.user?.name}</div>
          <div className="absolute top-4 right-10 border">
            <button onClick={() => signOut()}>Sign out</button>
          </div>
        </div>
      ) : (
        <div className="flex w-full h-12 justify-center align-middle bg-white text-xl font-bold tracking-tight md:tracking-tighter leading-tight ">
          <div className="absolute top-4 right-10">
            <button onClick={() => signIn()}>Sign in</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
