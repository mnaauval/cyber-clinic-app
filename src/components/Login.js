import { useState } from "react";
import LoginForm from "./LoginForm";
import Home from "./Home";
import { useSelector } from "react-redux";
import { selectuser } from "../features/userLogin";

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const user = useSelector(selectuser);

  function submitForm() {
    setIsSubmitted(true);
  }

  return <>{!isSubmitted && user ? <LoginForm submitForm={submitForm} /> : <Home />}</>;
};

export default Login;
