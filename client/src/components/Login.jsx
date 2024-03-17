import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/App.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://remove-server-calculator.vercel.app/login",
        {
          email,
          password,
        },
        {
          withCredentials: true, // Send cookies with the request
        }
      )
      .then((response) => {
        if (response.data === "success") {
          alert("Login successfully");
          navigate("/home");
        } else {
          alert("Password is not correct");
          navigate("/home");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error appropriately, e.g., show an error message to the user
      });
  };

  return (
    <div className="container">
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="">Email </label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={(data) => setEmail(data.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Enter Password"
            onChange={(data) => setPassword(data.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Login
        </button>
        <br />
        <button className="btn btn-primary2">
          <Link to="/register">Register</Link>
        </button>
      </form>
    </div>
  );
};

export default Login;
