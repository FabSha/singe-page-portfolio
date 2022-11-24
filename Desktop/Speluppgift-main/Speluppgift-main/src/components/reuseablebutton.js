import { useNavigate } from "react-router-dom"
const Reuseablebutton = ({ children }) => {
    const navigate = useNavigate()
    return (
        <button className="reuse-b" onClick={() => { navigate("/choice") }}>{children}</button>
    )
}
export default Reuseablebutton;