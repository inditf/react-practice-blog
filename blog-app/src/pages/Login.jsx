import React from "react";
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="auth">
            <h1>Login Page</h1>
            <form>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="password" />
                <button>登录</button>
                <span>Don't you have an account <Link to="/register">Register</Link></span>
                <p>Error!</p>
            </form>
        </div>

    );
}
export default Login;