import React, { useState } from "react";
import "./signin.css"; // Assuming you have a CSS file for styling
import signInLogo from "../../Assets/singUpLogo.png";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { storeUser } from "../../signupapi"; // Assuming you have a function to store user data

const initialUser = {
  password: "",
  identifier: "",
};

const SignIn = () => {
  const [user, setUser] = useState(initialUser);
  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const url = `http://localhost:1337/api/auth/local`;
    try {
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          storeUser(data);
          toast.success("Logged in successfully!", {
            hideProgressBar: true,
          });
          setUser(initialUser);
          navigate("/");
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  return (
    <div className="container">
      <div className="logo">
        <img src={signInLogo} alt="" />
      </div>
      <div className="signin">
        <h1>Sign In</h1>
        <div className="inputitems">
         <div className="form-group">
            <input
              type="email"
              id="email"
              name="identifier"
              required
              placeholder="email:"
              value={user.identifier}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Password:"
              value={user.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="btn-signin">
          <button type="submit" onClick={handleLogin}>
            Sign In
          </button>
        </div>
        <p className="signUptext">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>
        <p className="forgettext">
          <a href="/forgot-password">Forgot Password?</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
