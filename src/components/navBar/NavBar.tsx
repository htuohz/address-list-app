import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import axios from "../../api/axios";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const onSignout = () => {
    axios
      .post("/logout")
      .then((res) => {
        if (res.status === 204) navigate("/signin");
      })
      .catch(console.log);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit" href="/signup">
            Sign up
          </Button>
          <Button color="inherit" href="/signin">
            Sign in
          </Button>
          <Button color="inherit" onClick={onSignout}>
            Sign out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
