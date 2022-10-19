
import { useState, createContext, useContext } from "react";



interface IloginContext{
    cookie:string;
    signedUser?:Function;

}
const defaultValuie={
    cookie:""
}
const UserContext = createContext<IloginContext>(defaultValuie);



export const LoginContext=({children}:any)=>{
    const [cookie, setCookie] = useState(defaultValuie.cookie);
    

    const signedUser =(cookie:string)=>{
        setCookie(cookie)
    }


    return ( 

            <UserContext.Provider value={{cookie, signedUser}}>
                {children}
            </UserContext.Provider>

    )


}