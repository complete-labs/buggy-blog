import Link from 'next/link'
import Avatar from '../components/avatar'
import { useCookies } from 'react-cookie'
import { useState, useEffect } from 'react'

type Props = {
    callbackURL: string
}

const LoginHeader = ({ callbackURL }: Props) => {
    const [cookies] = useCookies(['user'])
    const [username, setUserName] = useState("Guest")
    const [buttontext, setButtontext] = useState("Login")
    useEffect(() => {
        if (cookies['user'] !== undefined) {
            setUserName(cookies['user'])
            setButtontext("Logout")
        }
    })
    return <Link href={{ pathname: "/login", query: {callbackURL: callbackURL} }} as="/login">
        <a>
            <div className="flex justify-end pt-2 mb-2">
                <Avatar name={username} picture="/assets/blog/authors/jj.jpeg" />
                <div className="flex items-center ml-4">{buttontext}</div>
            </div>
        </a>
    </Link>
}

export default LoginHeader