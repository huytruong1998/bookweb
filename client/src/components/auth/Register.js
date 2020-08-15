import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

const Register = () => {
  const [values, setValue] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e) =>
    setValue({ ...values, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <Form onSubmit={onSubmit} noValidate>
      <h1>Register</h1>
      <Form.Input
        label="Email"
        name="email"
        placeholder="Email address ..."
        value={values.email}
        onChange={onChange}
      />
      <Form.Input
        label="Password"
        name="password"
        placeholder="Password"
        value={values.password}
        onChange={onChange}
      />
      <Form.Input
        label="confirmPassword"
        name="confirmpassword"
        placeholder="Confirm Password"
        value={values.confirmPassword}
        onChange={onChange}
      />
      <Button type="submit" primary>
        Register
      </Button>
    </Form>
  );
};

export default Register;
