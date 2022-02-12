import { useState } from "react";
import FormRegister from "./FormRegister";
import Home from "./Home";

const Register = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return <>{!isSubmitted ? <FormRegister submitForm={submitForm} /> : <Home />}</>;
};

export default Register;
