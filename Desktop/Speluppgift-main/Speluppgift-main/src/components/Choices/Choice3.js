import { useNavigate } from "react-router-dom"
import Text from "./Text.js"

const Choice3 = () => {

    const navigate = useNavigate()
    return (
        <div className="choice3">
            <div className="choice-btn">
                <Text />
                <button className="choice-btn5" onClick={() => { navigate("/choice4") }}><p>This way</p></button>
                <button className="choice-btn6" onClick={() => { navigate("/Death3") }}><p>This way</p></button>
                <button className="exit-btn1" onClick={() => { navigate("/") }}>Exit</button>
            </div>
        </div>
    )
}
export default Choice3;