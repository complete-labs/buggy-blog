import Link from 'next/link';
import { useSession } from '../context/SessionProvider';
import { Menu, Transition } from '@headlessui/react';
import classNames from 'classnames';
import { deleteCookie } from 'cookies-next';
import { Fragment } from 'react';
import Avatar from './avatar';
import ProfileMenu from './profileMenu';

const Header = () => {
  const { session } = useSession();
  return (
    <div className="flex justify-between items-center mt-10">
      <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight">
        <Link href="/">
          <a className="hover:underline">Blog</a>
        </Link>
        .
      </h2>
      {session.jwt && <ProfileMenu />}
    </div>
  );
};

export default Header;
