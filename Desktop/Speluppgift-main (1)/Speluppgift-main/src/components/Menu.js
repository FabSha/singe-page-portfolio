import { useNavigate } from "react-router-dom"

const Menu = () => {

    const navigate = useNavigate()

    return(
        <div>
            
    
            <button className="play-btn" onClick={() => {navigate("/")}}>Play</button><br></br>

            <button className="logout-btn" onClick={() => {navigate("/")}}>Log out</button>
        </div>
    )
}
export default Menu;