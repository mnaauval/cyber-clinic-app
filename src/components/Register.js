import { useState } from "react";
import RegisterForm from "./RegisterForm";
import Home from "./Home";

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return <>{!isSubmitted ? <RegisterForm submitForm={submitForm} /> : <Home />}</>;
};

export default Register;
