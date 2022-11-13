import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { Box, Stack } from "@mui/system";

export default function SigninForm() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    remember: "",
  });

  useEffect(() => {
    return () => {
      setData({
        ...data,
        password: "",
      });
    };
  }, []);

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value,
    });
  };

  const submit = () => {
    axios.get("/sanctum/csrf-cookie").then(() => {
      axios
        .post("login", data)
        .then((res) => {
          if (res.status === 204) {
            navigate("/addresses");
          }
        })
        .catch(console.log);
    });
  };

  return (
    <Box sx={{ my: 10, mx: 20 }}>
      <h2>Sign In</h2>
      <form onSubmit={submit}>
        <Stack spacing={2}>
          <TextField
            type="text"
            name="email"
            label="Email"
            value={data.email}
            autoComplete="username"
            onChange={onHandleChange}
          />

          <TextField
            type="password"
            name="password"
            value={data.password}
            autoComplete="current-password"
            title="Password"
            onChange={onHandleChange}
            data-testid="password"
          />
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  name="remember"
                  value={data.remember}
                  onChange={onHandleChange}
                />
              }
              label="Remember me"
            />
          </FormGroup>
          <Button onClick={submit} data-testid="signin-button">
            Sign in
          </Button>
        </Stack>
      </form>
    </Box>
  );
}
