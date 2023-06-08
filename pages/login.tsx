import { useCookies } from 'react-cookie'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Login = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['user'])
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState("")
    const router = useRouter()
    const callbackURL = router.query.callbackURL?.toString() || "/"

    const setLoginCookie = (event: React.FormEvent) => {
        event.preventDefault()
        if (userName === 'Admin' && password === "admin123") {
            setErrorMsg("")
            setCookie('user', userName, { path: '/' })
            router.replace(callbackURL)
        }
        setErrorMsg("Invalid credentials!")
    }

    const removeLoginCookie = (event: React.MouseEvent) => {
        event.preventDefault()
        removeCookie('user')
        router.replace(callbackURL)
    }

    return <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        {!cookies['user'] ?
            <>
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form id="loginForm" className="space-y-6" onSubmit={(event) => setLoginCookie(event)}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
                            <div className="mt-2">
                                <input name="username" value={userName} type="text" onChange={e => setUserName(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                            <div className="mt-2">
                                <input name="password" value={password} type="password" onChange={e => setPassword(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>
                    <p className="mt-5 text-center">{errorMsg}</p>
                </div>
            </>
            : <>
                <h2 className="mt-10 mb-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Welcome to the blog!</h2>
                <div className="flex justify-center">
                    <button onClick={removeLoginCookie} className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign out</button>
                </div>
            </>}
    </div>
}

export default Login
