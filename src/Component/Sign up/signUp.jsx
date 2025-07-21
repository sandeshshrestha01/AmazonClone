import React, { useState } from "react";
import "./signUp.css";
import signUpLogo from "../../Assets/singUpLogo.png";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const initialUser = {
  email: "",
  username: "",
  password: "",
};

const SignUp = () => {
  const [user, setUser] = useState(initialUser);
  const navigator = useNavigate();

  const signUp = async () => {
    try {
      const url = "http://localhost:1337/api/auth/local/register";
      if (user.email && user.username && user.password) {
        const res = await axios.post(url, user);
        if (res) {
          setUser(initialUser);
          navigator("/signIn");
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };

  return (
    <div className="signUpPage">
      <div className="amazonImg">
        <img src={signUpLogo} alt="" />
      </div>
      <div className="inputForm">
        <h2 className="headSignUp">Creat a new account</h2>
        <div className="inputItems">
          <input
            className="inputitem"
            type="text"
            name="username"
            placeholder="UserName"
            value={user.username}
            onChange={handleChange}
          />
          <input
            className="inputitem"
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />
          <input
            className="inputitem"
            type="Password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className="btncreat">
          <button onClick={signUp}>Creat account</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
