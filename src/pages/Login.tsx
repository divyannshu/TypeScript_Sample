// src/pages/LoginPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/use-auth-context";
import { Button, TextField, Box, Typography } from "@mui/material";

const LoginPage = () => {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(username);
  };

  return (
    <Box
      sx={{
        height: "100vh", // full viewport height
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f2f5", // light background
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          width: 300,
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: "white",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h5" mb={2} align="center">
          Login
        </Typography>
        <TextField
          label="Username"
          variant="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          onClick={() => navigate("/book")}
          fullWidth
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
