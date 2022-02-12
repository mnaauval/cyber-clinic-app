import { useEffect, useState } from "react";

const useRegister = (callback, validate) => {
  const [values, setValues] = useState({
    full_name: "",
    phone: "",
    place: "",
    address: "",
    post_code: "",
    message: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting === true) {
      callback();
      alert("Register Sukses");
    }
  });

  return { handleChange, values, handleSubmit, errors };
};

export default useRegister;
