import faker from "@faker-js/faker";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../features/dataPastient";

const useRegister = (callback, validate) => {
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    full_name: "",
    gender: "",
    phone: "",
    age: "",
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
    dispatch(
      addData({
        id: faker.datatype.uuid(),
        full_name: values.full_name,
        gender: values.gender,
        phone: values.phone,
        age: values.age,
        place: values.place,
        address: values.address,
        post_code: values.post_code,
        message: values.message,
      })
    );
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
