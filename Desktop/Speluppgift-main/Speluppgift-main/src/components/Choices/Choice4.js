import { useNavigate } from "react-router-dom"
import Text from "./Text.js"

const Choice4 = () => {

    const navigate = useNavigate()
    return (
        <div className="choice4">
            <div className="choice-btn">
                <Text />
                <button className="choice-btn7" onClick={() => { navigate("/Choice5") }}>This way</button>
                <button className="choice-btn8" onClick={() => { navigate("/Death4") }}>This way</button>
                <button className="exit-btn1" onClick={() => { navigate("/menu") }}>Exit</button>
            </div>
        </div>
    )
}
export default Choice4;