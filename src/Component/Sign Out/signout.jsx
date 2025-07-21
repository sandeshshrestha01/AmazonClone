import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
const SignOut = () => {
    const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user");
    navigate("/HomeScreen/homeScreen");
  }, [navigate]);

  return null;
};
export default SignOut
