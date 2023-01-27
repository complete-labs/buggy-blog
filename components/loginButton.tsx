import { signIn, signOut, useSession } from "next-auth/react";

export const Login = () => {
  const { status } = useSession();
  return (
    <div>
      {status === "authenticated" ? (
        <button onClick={() => signOut()} className="p-4">
          Sign out
        </button>
      ) : (
        <button onClick={() => signIn()} className="p-4">
          Sign in
        </button>
      )}
    </div>
  );
};
