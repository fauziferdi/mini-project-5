import { useState } from "react";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  return [values, setValues, handleChange, errors, setErrors];
};

export default useForm;
