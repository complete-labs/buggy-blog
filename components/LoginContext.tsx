
import { useState, createContext, FC } from "react";
import cookies from "js-cookie"



interface IloginContext {
    cookie: string;
    signedUser?: Function;
    signoutUser?: Function;

}
const defaultValue = {
    cookie: ""
}
export const UserContext = createContext<IloginContext>(defaultValue);


export const LoginContext: FC = ({ children }) => {
    const [cookie, setCookie] = useState(defaultValue.cookie);

    const signedUser = (cookie: string) => {
        setCookie(cookie)
    }
    const signoutUser = () => {
        const token = cookies.get(cookie.split('=')[0])
        cookies.remove(token!)
        setCookie("")
    }
    return (

        <UserContext.Provider value={{ cookie, signedUser, signoutUser }}>
            {children}
        </UserContext.Provider>)
}