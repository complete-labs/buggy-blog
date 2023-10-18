import { useState, useEffect } from 'react';

export default function useToken() {
    const getToken = () => {
        if (typeof window !== "undefined") {
            const tokenString = sessionStorage.getItem('token');
            const userToken = JSON.parse(tokenString);
            return userToken?.token
        }
    };
    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        if (typeof window !== "undefined") {
            sessionStorage.setItem('token', JSON.stringify(userToken));
            setToken(userToken.token);
        }
    };

    return {
        setToken: saveToken,
        token
    }
}
