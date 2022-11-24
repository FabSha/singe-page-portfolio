import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Register = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState({
        email: "",
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value

        setUser({ ...user, [name]: value })
        console.log(user.username)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user)

        // här ska vi göra error hantering
        // tex att man ska fylla i alla fält eller om en user redan är registrerad.

        axios
            .post("http://localhost:3000/users", user).then(alert("User created"))//Fixa någon slags redirect

        navigate("/")

        setUser({
            email: "",
            username: "",
            password: ""
        })

    }

    return (
        <div className="overlay">
            <div className="menu-card">
                <h1 className="titel-name">Escape the woods</h1>
                <form className="form">
                    <h2>Register</h2>


                    <label className="form-control">
                        Email:
                        <input type="email" id="email" name="email" value={user.email} onChange={handleChange}></input>

                    </label>


                    <label className="form-control">
                        Username:
                        <input type="text" id="username" name="username" value={user.username} onChange={handleChange}></input>

                    </label>


                    <label className="form-control">
                        Password:
                        <input type="password" id="password" name="password" value={user.password} onChange={handleChange}></input>
                    </label>

                    <button className="register-btn1" type="submit" onClick={handleSubmit}>Register</button>


                </form >
                <button className="exit-btn1" onClick={() => { navigate("/") }}>Exit</button>
            </div>
        </div>

    )
}

export default Register;