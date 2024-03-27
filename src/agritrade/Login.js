import React, { useState } from "react";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        // Login
        const response = await axios.post(
          "http://localhost:9000/login",
          formData
        );
        console.log(response.data.message); // Log success message
      } else {
        // Sign up
        const response = await axios.post(
          "http://localhost:9000/signUp",
          formData
        );
        console.log(response.data.message); // Log success message
      }
    } catch (error) {
      console.error("Error:", error.response.data.message);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="wrapper">
      <nav className="nav">
        <div className="nav-button">
          <button
            className={`btn ${isLogin ? "white-btn" : ""}`}
            onClick={toggleForm}
          >
            Sign In
          </button>{" "}
          <button
            className={`btn ${isLogin ? "" : "white-btn"}`}
            onClick={toggleForm}
          >
            Sign Up
          </button>{" "}
        </div>{" "}
      </nav>
      <div className="form-box">
        <div
          className="login-container"
          style={{ left: isLogin ? "4px" : "-510px", opacity: isLogin ? 1 : 0 }}
        >
          <div className="top">
            <span>
              {" "}
              Don't have an account?{" "}
              <button className="link-btn" onClick={toggleForm}>
                Sign Up
              </button>
            </span>{" "}
            <header> Login </header>{" "}
          </div>{" "}
          <form onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}
            <div className="input-box">
              <input
                type="text"
                className="input-field"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>{" "}
            <div className="input-box">
              <input
                type="password"
                className="input-field"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </div>{" "}
            <div className="input-box">
              <input type="submit" className="submit" value="Sign In" />
            </div>{" "}
          </form>{" "}
        </div>{" "}
        <div
          className="register-container"
          style={{
            right: isLogin ? "-520px" : "5px",
            opacity: isLogin ? 0 : 1,
          }}
        >
          <div className="top">
            <span>
              {" "}
              Have an account ?{" "}
              <button className="link-btn" onClick={toggleForm}>
                {" "}
                Login{" "}
              </button>{" "}
            </span>{" "}
            <header> Sign Up </header>{" "}
          </div>{" "}
          <form onSubmit={handleSubmit}>
            {error && <div className="error-message">{error}</div>}
            <div className="input-box">
              <input
                type="text"
                className="input-field"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                required
              />
            </div>{" "}
            <div className="input-box">
              <input
                type="text"
                className="input-field"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                required
              />
            </div>{" "}
            <div className="input-box">
              <input
                type="text"
                className="input-field"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </div>{" "}
            <div className="input-box">
              <input
                type="password"
                className="input-field"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                required
              />
            </div>{" "}
            <div className="input-box">
              <input type="submit" className="submit" value="Register" />
            </div>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Login;
