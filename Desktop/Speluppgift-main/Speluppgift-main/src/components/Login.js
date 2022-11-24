import { useNavigate} from "react-router-dom"
import { useState } from "react"
import axios from "axios"


const Login = () => {
    const [username, setUsername] = useState("")

    const navigate = useNavigate()

    const handleChange = (e) => {
        setUsername(e.target.value)
    }

    const checkUsername = (users) => {
        const user = users.find((user) => user.username === username)
        if(user.username === username) return user
        // lägga till password check med && user.password
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // kolla om det finns en user med samma epost
        // vi behöver skriva en funktion för att göra en check


        const user = await axios.get("http://localhost:6001/users")
            .then((res) => checkUsername(res.data, username))
            .catch((error) => {
                alert("error")
            })
            console.log(user)
            console.log(user.username)

            if (user.username === username) {
                navigate ("/menu")


        
        localStorage.setItem("user", JSON.stringify(user.id))
            }
            setUsername("")

    }

    return (
        <div className="overlay">
        <div className="menu-card">
            <h1 className="titel-name">Escape the woods</h1>
            <form className="form1">
                <h2>Login</h2>

                    
                    <label className="form-control">
                        Username:
                        <input type="text" id="username" value={username} onChange={handleChange}></input>
                     
                    </label>
                    
                    <label className="form-control">
                        Password:
                        <input type="password" id="password"></input>
                    </label>
                    <button className="login-btn" type="submit" onClick={handleSubmit}>Login</button>
            </form>
            <button className="register-btn2" onClick={() => {navigate("/Register")}}>Register</button>

            <button onClick={() => {navigate("/menu")}}>Register</button>
            <button className="exit-btn1" onClick={() => { navigate("/") }}>Exit</button>

        </div>
        </div>
    )

}




export default Login;