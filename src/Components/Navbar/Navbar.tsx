import { Box, TextField, Typography, IconButton } from "@mui/material";
import { Notifications } from "@mui/icons-material"; // Importa el ícono de notificaciones
import { useAuth } from "../../Auth/Auth.context";

export const Navbar = () => {
  const { user } = useAuth();
  const userImage = user?.photos?.[0]?.value;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "10px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)", // Box shadow
        backgroundColor: "white",
      }}
    >
      {/* Box con los textos de navegación */}
      <Box sx={{ display: "flex", gap: "60px" }}>
        <Typography variant="h6" sx={{ cursor: "pointer" }}>
          Inicio
        </Typography>
        <Typography variant="h6" sx={{ cursor: "pointer" }}>
          Categoría
        </Typography>
        <Typography variant="h6" sx={{ cursor: "pointer" }}>
          Progreso
        </Typography>
      </Box>

      <TextField
        placeholder="Busca un curso"
        variant="outlined"
        sx={{
          width: "30%",
          borderRadius: "50px", // Bordes redondeados
          "& .MuiOutlinedInput-root": {
            borderRadius: "50px", // Aplica el borderRadius al campo de texto
            "& fieldset": {
              borderColor: "#ccc", // Ajusta el color del borde
            },
            "&:hover fieldset": {
              borderColor: "#3f51b5", // Color del borde cuando se pasa el mouse
            },
            "&.Mui-focused fieldset": {
              borderColor: "#3f51b5", // Color del borde cuando el campo está enfocado
            },
            "& input": {
              padding: "7px 10px", // Ajusta el padding interno del campo de texto
            },
          },
        }}
      />

      {/* Box para la imagen de usuario y notificaciones */}
      <Box sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {/* Ícono de notificaciones */}
        <IconButton sx={{ color: "black" }}>
          <Notifications />
        </IconButton>
        {userImage ? (
          <img
            src={userImage}
            alt="User"
            style={{ maxWidth: "40px", height: "40px", borderRadius: "50%" }}
          />
        ) : (
          <Typography variant="h6">
            No se encontró una foto de perfil.
          </Typography>
        )}
      </Box>
    </Box>
  );
};
