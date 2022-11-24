import { useNavigate } from "react-router-dom"
import Text from "./Text.js"

const Choice5 = () => {

    const navigate = useNavigate()
    return (
        <div className="choice5">
            <div className="choice-btn">
                <Text />
                <button className="choice-btn9" onClick={() => { navigate("/goal") }}>This way</button>
                <button className="choice-btn10" onClick={() => { navigate("/Death5") }}>This way</button>
                <button className="exit-btn1" onClick={() => { navigate("/menu") }}>Exit</button>
            </div>
        </div>
    )
}
export default Choice5;