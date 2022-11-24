import { useNavigate } from "react-router-dom"
const Menu = () => {

    const navigate = useNavigate()

    return (
        <div className="overlay">
            <div className="menu-card">
                <h1 className="titel-name">Escape the woods</h1>
                <button className="play-btn" onClick={() => { navigate("/Story") }}>Play</button>
                <button className="logout-btn" onClick={() => { navigate("/") }}>Log out</button>
                <button className="exit-btn1" onClick="self.close()">Exit</button>

            </div>
        </div>
    )
}
export default Menu;