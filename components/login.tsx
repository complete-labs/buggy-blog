import { useSession, signIn, signOut } from 'next-auth/react';

const LoginButton = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <button
        style={{ border: '1px solid gray' }}
        className="bg-gray rounded-md px-1 text-black"
        onClick={() => signOut()}
      >
        You're Logged In, click here to logout
      </button>
    );
  }
  return (
    <button
      style={{ border: '1px solid gray' }}
      className="bg-gray rounded-md px-1 text-black"
      onClick={() => signIn()}
    >
      Log in
    </button>
  );
};

export default LoginButton;
