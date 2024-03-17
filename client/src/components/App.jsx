import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../style/App.css";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
Login;
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
