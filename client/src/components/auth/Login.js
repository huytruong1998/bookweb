import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import { loginUser } from "../../actions/authActions";

const Login = () => {
  const [values, setValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = values;
  const onChange = (e) =>
    setValue({ ...values, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    loginUser(email, password);
  };
  return (
    <Form onSubmit={onSubmit} noValidate>
      <h1>Login</h1>
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
      <Button type="submit" primary>
        Login
      </Button>
    </Form>
  );
};

export default Login;
