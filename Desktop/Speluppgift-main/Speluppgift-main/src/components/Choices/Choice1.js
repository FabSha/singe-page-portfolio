import { useNavigate } from "react-router-dom"
import Text from "./Text.js"

const Choice1 = () => {

    const navigate = useNavigate()
    return (
        <div className="choice1">
            <div className="choice-btn">
                <Text />
                <button className="choice-btn1" onClick={() => { navigate("/choice2") }}><p>This way</p></button>
                <button className="choice-btn2" onClick={() => { navigate("/Death1") }}><p>This way</p></button>
                <button className="exit-btn1" onClick={() => { navigate("/") }}>Exit</button>
            </div>
        </div>
    )
}
export default Choice1;
