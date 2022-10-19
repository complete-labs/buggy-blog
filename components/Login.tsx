import { useState, Fragment, useEffect, useContext } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { InputField } from './InputField'
import { useRouter } from 'next/router'
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

        if (props.isPremium) {
            console.log(cookie.length)
            if (cookie.length > 0) {
                console.log("cookie is not empty")
                setLoginStatus(false)
            }
            else {
                console.log("is empty")
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
            signedUser?.(cookies.set("token", "LOGIN", { expires: 1 / 24 }))
        }, 100)

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
                                            <InputField labelName='user name' placeholderName='user name' value={defaultValue.userName} type='text' />
                                        </div>
                                        <div className='mb-3 mt-5'>
                                            <InputField labelName='password' placeholderName='user name' value={defaultValue.password} type='password' />
                                        </div>
                                    </div>

                                    <div className="mt-4 ">
                                        <button
                                            type="button"
                                            className="bg-indigo-500 inline-flex justify-center rounded-md border border-transparent  px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={Login}
                                        >
                                            {!loginStatus ?
                                                <div aria-label="Loading..." role="status">
                                                    <svg className="h-6 w-6 animate-spin" viewBox="3 3 18 18">
                                                        <path
                                                            className="fill-gray-200"
                                                            d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"></path>
                                                        <path
                                                            className="fill-gray-800"
                                                            d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"></path>
                                                    </svg>
                                                </div> :
                                                "Login"

                                            }


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

