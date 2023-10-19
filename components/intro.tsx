import { CMS_NAME } from '../lib/constants';
import Avatar from './avatar';
import { useEffect, useState } from 'react';
import { deleteCookie } from 'cookies-next';
import { useSession } from '../context/SessionProvider';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import ProfileMenu from './profileMenu';

const Intro = () => {
  const { session, setSession } = useSession();
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        Blog.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog example using{' '}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </a>{' '}
        and {CMS_NAME}.
      </h4>

      {/* user has a jwt (AKA they're logged in) show their avatar */}
      {session.jwt && <ProfileMenu />}
    </section>
  );
};

export default Intro;
