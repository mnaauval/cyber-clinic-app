import React, { useState } from "react";
import FormLogin from "./FormLogin";
import Home from "./Home";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  return <>{!isSubmitted ? <FormLogin submitForm={submitForm} /> : <Home />}</>;
};

export default Form;
