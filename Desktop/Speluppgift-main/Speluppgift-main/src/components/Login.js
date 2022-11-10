
const Login = () => {
    return (
        <div>
            <form className="form">
                <h2>Login</h2>
                    <li>
                    <label className="form-control">
                        Username:
                        <input type="text" id="username"></input>
                     
                    </label>
                    </li>
                    <li>
                    <label className="form-control">
                        Password:
                        <input type="password" id="password"></input>
                    </label>
                    </li>
                    <input type="submit" value="Login"></input>
            
            </form >
            <button className="register-btn1" onClick="click">Register</button>
        </div>
    )

}




export default Login;