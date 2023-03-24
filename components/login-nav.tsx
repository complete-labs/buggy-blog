import { useSession, signIn, signOut } from 'next-auth/react';

const LoginNav = () => {
  const { data: session } = useSession();

  const renderLoginState = () => {
    if (session) {
      return (
        <div className="flex gap-3">
          {session.user?.image && (
            <img
              alt={session.user?.name || ''}
              className="w-[40px] h-[40px] rounded-full"
              src={session.user?.image}
            />
          )}
          <button
            style={{ border: '1px solid gray' }}
            className="px-4 py-2 rounded bg-slate-200 hover:opacity-70"
            onClick={() => signOut()}
          >
            Log Out
          </button>
        </div>
      );
    }
    return (
      <button
        style={{ border: '1px solid gray' }}
        className="px-4 py-2 rounded bg-slate-200 hover:opacity-70"
        onClick={() => signIn()}
      >
        Log In
      </button>
    );
  };

  return <nav className="absolute right-0 pr-6 py-2">{renderLoginState()}</nav>;
};

export default LoginNav;
