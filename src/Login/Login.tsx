import React from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Divider,
  Stack,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useLoginStyle } from "./Login.styles";

const Login = () => {
  const { classes } = useLoginStyle();

  // Maneja el clic en el botón de Google
  const handleGoogleLogin = () => {
    // Redirige al backend para iniciar sesión con Google
    window.location.href = "http://localhost:3000/auth/google";
  };

  return (
    <Box className={classes.container}>
      {/* Título */}
      <Typography
        variant="h4"
        fontWeight={"bolder"}
        sx={{ mb: 3, color: "#6c757d" }}
      >
        Welcome back!!
      </Typography>

      {/* Formulario */}
      <Stack spacing={2} className={classes.form}>
        {/* Campo de Usuario */}
        <TextField
          label="Usuario"
          placeholder="Ingresa tu nombre de usuario"
          variant="outlined"
          fullWidth
          className={classes.textField}
        />

        {/* Campo de Contraseña */}
        <TextField
          label="Contraseña"
          type="password"
          placeholder="Ingresa tu contraseña"
          variant="outlined"
          fullWidth
          className={classes.textField}
        />

        {/* Olvidaste contraseña */}
        <Typography
          variant="body2"
          align="right"
          sx={{ color: "#6c757d", cursor: "pointer" }}
        >
          ¿Olvidaste tu contraseña?
        </Typography>

        {/* Botón de inicio de sesión */}
        <Button variant="contained" className={classes.button} fullWidth>
          Iniciar Sesión
        </Button>

        {/* Divider */}
        <Divider>o</Divider>

        {/* Botones de inicio con Google y Facebook */}
        <Button
          variant="outlined"
          startIcon={<Google />}
          className={classes.socialButton}
          fullWidth
          onClick={handleGoogleLogin} // Maneja el inicio de sesión con Google
        >
          Iniciar sesión con Google
        </Button>

        <Button
          variant="outlined"
          startIcon={<FacebookIcon />}
          className={classes.socialButton}
          fullWidth
        >
          Iniciar sesión con Facebook
        </Button>
      </Stack>
    </Box>
  );
};

export default Login;
