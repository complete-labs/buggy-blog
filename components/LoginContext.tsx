
import { useState, createContext, FC} from "react";



interface IloginContext {
    cookie: string;
    signedUser?: Function;

}
const defaultValuie = {
    cookie: ""
}
export const UserContext = createContext<IloginContext>(defaultValuie);



export const LoginContext:FC = ({ children }) => {
    const [cookie, setCookie] = useState(defaultValuie.cookie);


    const signedUser = (cookie: string) => {
        setCookie(cookie)
    }


    return (

        <UserContext.Provider value={{ cookie, signedUser }}>
            {children}
        </UserContext.Provider>

    )


}