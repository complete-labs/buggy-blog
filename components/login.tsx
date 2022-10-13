import React, { useRef } from "react"

const myStyle = {
    fontSize: 100
}

export const LoginForm = () => {
    const email = useRef("");
    const password = useRef("");

    const tryLogin = () => {
        fetch("/login", { 
            method: "POST", 
            headers: {
            'Content-Type': 'application/json'
             }, 
             body: JSON.stringify({ data: { email, password }})
        })
        .then((data) => {
            console.log("You logged in! data: ", data)
        })
        .catch((err) => console.error("COULD NOT LOGIN: ", err))
    }

    return (
    <form action="/login" method="post">
        <label htmlFor="email">login email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">password:</label>
        <input type="password" id="password" name="passwordf" />
        <button type="submit" onClick={tryLogin}>Submit</button>
    </form>
    )
}

export const LoginModal = () => {
    return (
        <>
            <p style={myStyle}>You must login to view this article</p>
            <LoginForm/>
        </>
    )
}