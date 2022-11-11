import {useNavigate} from "react-router-dom"

const Login = () => {

    const navigate = useNavigate()

    return (
        <div>
            <form className="form">
                <h2>Login</h2>
                    
                    <label className="form-control">
                        Username:
                        <input type="text" id="username"></input>
                     
                    </label><br></br>
                    
                    <label className="form-control">
                        Password:
                        <input type="password" id="password"></input>
                    </label>
                    
                   
            
            </form>
            <button className="login-btn" onClick={() => {navigate("/Menu")}}>Login</button><br></br>
            <button className="register-btn1" onClick={() => {navigate("/Register")}}>Register</button>
        </div>
    )

}




export default Login;