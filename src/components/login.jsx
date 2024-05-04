import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (
      <>
        <header>
        <Link to="/">Home</Link>
        </header>
        <main>
          <h1>Login</h1>
          <form>
            <div>
              <label for="username">Username: </label>
              <input id="username" type="text" name="username" placeholder="Username" />
            </div>
            <br/>
            <div>
              <label for="password">Password: </label>
              <input id="password" type="password" name="password" placeholder="Password" />
            </div>
            <br/>
            <button type="submit">Submit</button>
          </form>
        </main>
      </>
    );
  };
  
  export default Login;