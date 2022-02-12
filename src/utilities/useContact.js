import { useEffect, useState } from "react";

const useContact = (validate) => {
  const [values, setValues] = useState({
    floating_first_name: "",
    floating_last_name: "",
    floating_email: "",
    floating_subject_msg: "",
    floating_msg: "",
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
      alert("Pesan Terkirim");
      window.location.reload();
    }
  });

  return { handleChange, values, handleSubmit, errors };
};

export default useContact;
