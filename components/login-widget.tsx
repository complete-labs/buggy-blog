import { useEffect, useState } from 'react';
import loginStyles from './login-styles.module.css'
import UserType from './../types/user';
import { getCurrentUser, login, logout } from '../lib/user';
import PremiumBadge from './premium-badge';

type Props = {
    preview?: boolean
  }
  

const LoginWidget = ({preview}: Props) => {
    let [user, setUser] = useState<UserType | null>(null);

    useEffect(() => {
        const u = getCurrentUser();
        setUser(u);
    }, []);
    
    if (preview) {
        if (user) {
            return (<a href="/login" className={loginStyles['button']}>
                        <img src={user.image} className={loginStyles['avatar-mini']} />
                        Account
                    </a>)
        }
        return <a href="/login" className={loginStyles['button']}>Sign In</a>
    }

    if (user) {
        return <div className={loginStyles['container']}>
            <h2 className={loginStyles['title']}>Hello, {user.username}</h2>
            <img src={user.image} className={loginStyles['avatar']} />
            <a href="/" className={loginStyles['button']}>Blog</a>
            <button onClick={logout} className={loginStyles['button']}>Sign Out</button>
        </div>
    }

    return <div className={preview ? loginStyles['preview-container'] : loginStyles['container']}>
        <PremiumBadge />
        <h2 className={loginStyles['title']}>You must log in to view this content</h2>
        <form onSubmit={(evt) => {
            evt.preventDefault()
            const data = new FormData(evt.target as HTMLFormElement)
            const username = data.get('username')?.toString() || "";
            const password = data.get('psw')?.toString() || "";
            login(username, password);
        }}>
            <div className={loginStyles['input-group']}>
                <input type="text" placeholder="Username" name="username" required />
            </div>
            <div className={loginStyles['input-group']}>
                <input type="password" placeholder="Password" name="psw" required />
            </div>
            <button type="submit" className={loginStyles['button']}>Sign In</button>
            <a href="/" className={loginStyles['button']}>{"<"} Back to Blog</a>
        </form>
    </div>
}

export default LoginWidget
