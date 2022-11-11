import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";



function App() {
  return (
    <BrowserRouter>
    
    <div className="container">
      <h1>Escape The Woods</h1>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Register" exact element={<Register />} />
          <Route path="/Menu" exact element={<Menu />} />



        </Routes>
      
      </div>
      </BrowserRouter>
  )
}

export default App;

