import { CMS_NAME } from '../lib/constants';
import Avatar from './avatar';
import { useEffect, useState } from 'react';
import { deleteCookie } from 'cookies-next';
import { useSession } from '../context/SessionProvider';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

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
      {session.loggedIn && (
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
              <Avatar
                name="Joe"
                picture="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-1">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      onClick={() => {
                        deleteCookie('jwt');
                        setSession({ loggedIn: false });
                      }}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full px-4 py-2 text-left text-sm'
                      )}
                    >
                      <p className="text-red-600">Sign out</p>
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      )}
    </section>
  );
};

export default Intro;
