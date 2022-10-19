import { useState, Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { InputField } from './InputField'
import { useRouter } from 'next/router'
import cookie from "js-cookie"

interface loginProps {
    isPremium: boolean
}

const Login = (props: loginProps) => {
    const [userName, setUserName] = useState("etiosa")
    const [password, setPasssword] = useState("password")
    const [loginStatus, setLoginStatus] = useState(false)
    useEffect(() => {

        if (props.isPremium) {
            let cookie = document.cookie;
            if (cookie.split(";")[2] != undefined) {
                setLoginStatus(false)
            }
            else {
                setLoginStatus(true)
            }
        }
        else {
            setLoginStatus(true)
        }

    })





    const router = useRouter()
    const closeModal = () => {
        router.push("/")

    }
    const Login = () => {
        setLoginStatus(true)
        setTimeout(() => {
            cookie.set("token", "LOGIN", { expires: 1 / 24 })
        }, 1000)
        setLoginStatus(false);
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
                                        Login
                                    </Dialog.Title>
                                    <div className="mt-5 flex flex-col justify-between justify-items-center">
                                        <div className='mb-3 mt-5'>
                                            <InputField labelName='user name' placeholderName='user name' value={userName} type='text' />
                                        </div>
                                        <div className='mb-3 mt-5'>
                                            <InputField labelName='password' placeholderName='user name' value={password} type='password' />
                                        </div>
                                    </div>

                                    <div className="mt-4 ">
                                        <button
                                            type="button"
                                            className="bg-indigo-500 inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={Login}
                                        >
                                            Login


                                        </button>
                                        <button
                                            disabled={loginStatus}
                                            type="button"
                                            className="ml-10 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 "
                                            onClick={closeModal}
                                        >
                                            Cancel
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

