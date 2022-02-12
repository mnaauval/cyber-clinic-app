import { useEffect, useState } from "react";

const useLogin = (callback, validate) => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleLogin = (value) => {
    if (values.email === "admin@admin.com" && values.password === "admin123") {
      alert("Login Sukses");
      setIsSubmitting(true);
    } else {
      alert("Login Gagal");
      setIsSubmitting(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    handleLogin(values);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting === true) {
      callback();
    }
  });

  return { handleChange, values, handleSubmit, errors };
};

export default useLogin;
