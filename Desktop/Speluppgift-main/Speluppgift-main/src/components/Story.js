import { useNavigate } from "react-router-dom"
const Story = () => {

    const navigate = useNavigate()
    return (

        <div className="story-page">

            <h1 className="titel-name">Escape the woods</h1>
            <div className="story-card">
                <h1>Story</h1>
                <p>You wake up with a ringing in your ear and blurry vision.. “Where am I..?” You groan out as you blink to clear up your vision.
                    <br></br>
                    As your vision begins to clear up, you seem to be laying on the ground of a forestry area.
                    <br></br><br></br>
                    You need to figure out where you are!
                    <br></br>
                    As you begin to stand up to seek for help you look around and there is an unknown, mysterious hidden figure behind some scattered trees and bushes..
                    <br></br><br></br>
                    Should you investigate it, or will you venture the other way into the forest to find help?
                </p>
                <button className="next-btn" onClick={() => { navigate("/choice1") }}>Next</button><br></br>
            </div>

        </div>
    )
}
export default Story;