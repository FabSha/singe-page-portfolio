

const Register = () => {
    return (
        <div>
            <form className="form">
                <h2>Register</h2>
                <li>
                    <label className="form-control">
                        Email:
                        <input type="email" id="email"></input>

                    </label>
                </li>
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
                

            </form >
            <button className="register-btn2" onClick="click">Register</button></div>
    )
}

export default Register;