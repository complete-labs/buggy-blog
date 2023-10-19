import {
  Dispatch,
  FormEvent,
  Fragment,
  SetStateAction,
  useRef,
  useState,
} from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { useSession } from '../context/SessionProvider';

const LoginModal = ({
  opened,
  setOpen,
}: {
  opened: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const { setSession } = useSession();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const handleLoginFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // email form validation
    if (!/^\S+@\S+$/.test(email)) {
      setErrors({
        email: 'Invalid email',
        password: errors.password,
      });
      return;
    }
    // password validation
    if (password.replaceAll(' ', '').length < 6) {
      setErrors({
        password: 'Password must be at least 6 characters',
        email: errors.password,
      });
      return;
    }

    const login = await fetch(`/api/login`, {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
    // if there were errors logging in, we check !loginResponse.success and loginResponse.message
    // for this case, we assume it's always going to pass so we destructure
    const { jwt } = await login.json();

    // jwt was stored in cookies in our API endpoint (for subsequent requests' auth), so here we just set our loggedIn state
    setSession({ loggedIn: !!jwt });
    // reset form validation errors
    setErrors({ email: '', password: '' });
    setOpen(false);
  };

  return (
    <Transition.Root show={opened} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 justify-center"
        onClose={setOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm">
                <div className="bg-white px-2 pb-4 pt-5 sm:p-4 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:mt-0 w-full">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        Welcome to Nexty articles
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Continue with email
                        </p>
                      </div>

                      <form
                        onSubmit={handleLoginFormSubmit}
                        className="text-left"
                      >
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium leading-6 text-gray-900"
                        >
                          Email
                        </label>
                        <input
                          required
                          onChange={(e) => setEmail(e.currentTarget.value)}
                          type="text"
                          id="email"
                          placeholder="e.g. joe@gmail.com"
                          className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <p className="text-red-600 text-xs">{errors.email}</p>
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium leading-6 text-gray-900 mt-1"
                        >
                          Password
                        </label>
                        <input
                          required
                          onChange={(e) => setPassword(e.currentTarget.value)}
                          type="password"
                          id="password"
                          placeholder="e.g. Secret123!"
                          className="block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-0 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        <p className="text-red-600 text-xs">
                          {errors.password}
                        </p>
                        <button
                          type="submit"
                          className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 w-full mt-3"
                        >
                          Login
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default LoginModal;
