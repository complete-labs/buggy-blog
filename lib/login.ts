import React, {useContext} from "react";
import {LoginContextType} from "../types/login";

export const LoginContext = React.createContext<LoginContextType>({
    isLoggedIn: false,
    setIsLoggedIn: () => {}
});

export const useLoginContext = (): LoginContextType => {
    return useContext(LoginContext);
};