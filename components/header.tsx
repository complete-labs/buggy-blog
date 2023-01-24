import Link from "next/link";
import LoginButton from "./login-button";

const Header = () => {
  return (
    <h2 className="grid grid-cols-2 mb-20 mt-8">
      <div className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/">
          <a className="hover:underline">Blog</a>
        </Link>
      </div>
      <div className="w-24 h-16 ml-auto">
        <LoginButton />
      </div>
    </h2>
  );
};

export default Header;
