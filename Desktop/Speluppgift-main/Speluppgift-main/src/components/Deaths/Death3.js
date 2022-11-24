import { useNavigate } from "react-router-dom"

const Death3 = () => {

    const navigate = useNavigate()
    return (
        <div className="overlay-death3">
            <div className="menu-card-death">
                <div className="death">
                    <h1 className="game-over">Game over</h1>
                    <button className="playagain-death" onClick={() => { navigate("/choice1") }}>Play again</button><br></br>
                    <button className="exit-death" onClick={() => { navigate("/Menu") }}>Exit</button><br></br>
                </div>
            </div>
        </div>
    )
}
export default Death3;