import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import { useRegisterForm } from "./Register.hooks"; // Importamos el hook
import { useRegisterStyle } from "./Register.styles"; // Importamos los estilos
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { classes } = useRegisterStyle(); // Usamos los estilos generados
  const {
    email,
    password,
    confirmPassword,
    displayName,
    age,
    date,
    isLoading,
    error,
    setEmail,
    setPassword,
    setConfirmPassword,
    setDisplayName,
    setAge,
    setDate,
    handleRegister,
  } = useRegisterForm(); // Usamos el hook

  const navigate = useNavigate(); // Usamos el hook para navegar

  // Función para manejar el clic en el icono de "Atrás"
  const handleBackClick = () => {
    navigate(-1); // Navegar hacia atrás
  };
  return (
    <Box className={classes.container}>
      <IconButton onClick={handleBackClick} className={classes.backButton}>
        <ArrowBack />
      </IconButton>
      <Typography variant="h4" align="center" mb={2} sx={{ color: "#6c757d" }}>
        Crear Cuenta
      </Typography>
      <Box className={classes.form}>
        <Stack spacing={2}>
          <TextField
            label="Nombre Completo"
            variant="outlined"
            fullWidth
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className={classes.textField}
          />
          <TextField
            label="Correo Electrónico"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={classes.textField}
          />
          <TextField
            label="Contraseña"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={classes.textField}
          />
          {/* Confirmación de Contraseña */}
          <TextField
            label="Confirmar Contraseña"
            type="password"
            variant="outlined"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={classes.textField}
          />
          {/* Campo de edad */}
          <TextField
            label="Edad"
            type="number"
            variant="outlined"
            fullWidth
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className={classes.textField}
            inputProps={{ min: 18, max: 100 }} // Opcional: validación de edad
          />
          {/* Campo de fecha de nacimiento */}
          <TextField
            label="Fecha de Nacimiento"
            type="date"
            variant="outlined"
            fullWidth
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={classes.textField}
            InputLabelProps={{
              shrink: true, // Para que el label no se superponga
            }}
          />
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
          <Button
            variant="contained"
            fullWidth
            onClick={handleRegister}
            className={classes.button}
            disabled={isLoading}
          >
            {isLoading ? "Registrando..." : "Registrarse"}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default Register;
