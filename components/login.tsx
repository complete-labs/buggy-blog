export const Login = () => {

    const userReq = { 
        method: "POST", 
        headers: {
        'Content-Type': 'application/json'
         }, 
         body: JSON.stringify(({ email: "m.j@yahoo.com", password: "ajd^&%hj5" }))
    }

    const login = () => {
        fetch("/login", userReq)
        .then((response) => {
            console.log(response);
        })
        .catch((err) => console.error("login failed", err))
    }

    return (
        <div>
            <p>This content is for premium members</p>
            <p>Please login to continue</p>
            <form action="/login" method="post">
                <input type="email" id="email" name="email" placeholder="email" />
                <input type="password" id="password" name="password" placeholder="password" />
                <button type="submit" onClick={login}>Submit</button>
            </form>
        </div>
    )
}