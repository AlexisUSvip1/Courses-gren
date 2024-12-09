import { makeStyles } from "tss-react/mui";

export const useRegisterStyle = makeStyles()((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f8f9fa", // Fondo más claro
    padding: "20px",
  },
  backButton: {
    position: "absolute",
    top: theme.spacing(2), // Espaciado de 2 unidades desde la parte superior
    left: theme.spacing(2), // Espaciado de 2 unidades desde el borde izquierdo
    zIndex: 1000, // Asegura que esté encima de otros elementos
  },
  form: {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "white",
    borderRadius: "8px",
    padding: "20px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  textField: {
    marginBottom: "15px",
  },
  button: {
    borderRadius: 20, // Bordes redondeados
    backgroundColor: "#8bc34a",
    color: "white",
    "&:hover": {
      backgroundColor: "#7cb342",
    },
  },
}));
