import { Box, Button, Stack, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios";

const initialFormState = {
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
};

export default function SignupForm() {
  const [data, setData] = useState(initialFormState);
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      setData(initialFormState);
    };
  }, []);

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const submit = () => {
    axios
      .post("register", data)
      .then((res) => {
        if (res.status === 204) {
          navigate("/addresses");
        }
      })
      .catch(console.log);
  };

  return (
    <Box sx={{ my: 10, mx: 20 }}>
      <h2>Sign Up</h2>
      <form>
        <Stack spacing={2}>
          <TextField
            type="text"
            name="name"
            value={data.name}
            className="mt-1 block w-full"
            autoComplete="name"
            onChange={onHandleChange}
            label="Name"
            required
          />

          <TextField
            type="email"
            name="email"
            error={!data.email.includes("@")}
            helperText="Invalid email"
            value={data.email}
            className="mt-1 block w-full"
            autoComplete="username"
            onChange={onHandleChange}
            label="Email"
            required
          />

          <TextField
            type="password"
            name="password"
            error={data.password.length < 8}
            value={data.password}
            className="mt-1 block w-full"
            autoComplete="new-password"
            onChange={onHandleChange}
            label="Password"
            helperText="Invalid password"
            data-testid="password"
            required
          />

          <TextField
            type="password"
            name="password_confirmation"
            error={data.password !== data.password_confirmation}
            value={data.password_confirmation}
            className="mt-1 block w-full"
            onChange={onHandleChange}
            label="Confirm Password"
            helperText="Password doesn't match"
            required
          />

          <div>
            <a href="/signin">Already registered?</a>
            <Button onClick={submit} data-testid="signup-button">
              Sign up
            </Button>
          </div>
        </Stack>
      </form>
    </Box>
  );
}
