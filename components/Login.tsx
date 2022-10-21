import { useState, Fragment, useEffect, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { InputField } from './InputField'
import cookies from "js-cookie"
import { UserContext } from './LoginContext'

interface loginProps {
    isPremium: boolean
}

interface userLogin {
    userName: string,
    password: string
}

const defaultValue: userLogin = {
    userName: "etiosa",
    password: "password"
}

const Login = (props: loginProps) => {
    const [loginStatus, setLoginStatus] = useState(false)
    const { cookie, signedUser } = useContext(UserContext)

    useEffect(() => {
        if (props.isPremium && cookie.length <= 0) {
            setLoginStatus(true)
        }

        else {
            setLoginStatus(false)
        }
    })

    const Login = () => {
        signedUser?.(cookies.set("token", "LOGIN", { expires: 1 / 24 }))
    }

    return (
        <>
            <Transition show={loginStatus} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => { }}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        To view this article, you have to login
                                    </Dialog.Title>
                                    <div className="mt-5 flex flex-col justify-between justify-items-center">
                                        <div className='mb-3 mt-5'>
                                            <InputField labelName='user name' placeholderName='user name' value={defaultValue.userName} type='text' />
                                        </div>
                                        <div className='mb-3 mt-5'>
                                            <InputField labelName='password' placeholderName='user name' value={defaultValue.password} type='password' />
                                        </div>
                                    </div>

                                    <div className="mt-4 ">
                                        <button
                                            type="button"
                                            className="bg-indigo-500 inline-flex justify-center rounded-md border border-transparent  
                                                        px-4 py-2 text-sm font-medium text-blue-900
                                                      hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={Login}
                                        > Login
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Login;

