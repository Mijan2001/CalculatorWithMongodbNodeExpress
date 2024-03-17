import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../style/App.css";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://remove-server-calculator.vercel.app/register", {
        name,
        email,
        password,
      })
      .then((user) => {
        if (user.data === "Already Registered") {
          alert("Email Registered");
          navigate("/login");
        } else {
          alert("Registerd is successfully");
          navigate("/login");
        }
      });
  };

  return (
    <div className="container">
      <h1>Register Page</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="">Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            id="nameId"
            placeholder="Enter Name"
            onChange={(data) => setName(data.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            id="emailId"
            placeholder="Enter Email"
            onChange={(data) => setEmail(data.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            className="form-control"
            type="password"
            name="password"
            id="passwordId"
            placeholder="Enter Password"
            onChange={(data) => setPassword(data.target.value)}
            required
          />
        </div>

        <p>have you an account ? </p>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
        <br />
        <button className="btn btn-primary2">
          <Link to="/login">Login</Link>
        </button>
      </form>
    </div>
  );
};

export default Register;
