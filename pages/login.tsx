import Router from 'next/router';
import React from 'react';

// User Login info
const userCredsDB = [
  {
    username: "user",
    password: "pass"
  },
  {
    username: "user2",
    password: "pass2"
  }
];

const handleSubmit = (event: React.FormEvent<EventTarget>) => {
  //Prevent page reload
  event.preventDefault();

  var { uname, pass } = document.forms[0];

  // Find user login info
  const userData = userCredsDB.find((user) => user.username === uname.value);

  // Compare user info
  if (userData) {
    if (userData.password !== pass.value) {
      // Invalid password
      // Don't distinguish password and username error messages, allows user to confirm if username exists or not
      // TODO: display error
    } else {
        //Login success
        localStorage.setItem('loggedInUser', userData.username);
        const params = new URLSearchParams(window.location.search);
        Router.push(`/posts/${params.get("rt")}`)
    }
  } else {
    // Invalid username
    // Don't distinguish password and username error messages, allows user to confirm if username exists or not
    // TODO: display error
  }
};

export default function Login() {
  return(
    // JSX code for login form
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  )
}

