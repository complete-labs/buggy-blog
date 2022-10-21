import { useCookies } from "react-cookie"

const LogoutButton = () => {
    const [cookies, setCookie, removeCookie] = useCookies(['auth-username', 'auth-password'])
    return (
        <button
            className="w-full text-white bg-success hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            onClick={() => removeCookie('auth-username')}
        >
            Log out
        </button>
    )
}

export default LogoutButton

