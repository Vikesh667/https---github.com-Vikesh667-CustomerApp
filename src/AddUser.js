import { Avatar } from "@mui/material";
import { useState } from "react";

import FormInput from "./components/FormInput";
import Image from './Image/Profile.png'
const AddUser = () => {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "phone",
      type: "phone",
      placeholder: "Phone",
      label: "Number",
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
      
    },
   
  ];

  let users = JSON.parse(localStorage.getItem("users")) || [];
  const onChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value });
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      users.push(values)
      
      localStorage.setItem("users", JSON.stringify(users));
  };
  
  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>AddUser</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Proced</button>
      </form>
    </div>
  );
};

export default AddUser;
