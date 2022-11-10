const Menu = () => {
    return(
        <div>
            <h1>Escape the woods</h1>
            <li>
            <button className="play-btn" onClick="clickplay">Play</button>
            </li>
            <button className="logout-btn" onClick="logout">Log out</button>
        </div>
    )
}
export default Menu;