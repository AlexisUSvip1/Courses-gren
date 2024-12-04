import { makeStyles } from "tss-react/mui";

export const useLoginStyle = makeStyles()(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
  },
  form: {
    width: "100%",
    maxWidth: 400,
    padding: "0 16px",
  },
  textField: {
    "& .MuiOutlinedInput-root": {
      borderRadius: 20, // Bordes redondeados
    },
  },
  button: {
    borderRadius: 20, // Bordes redondeados
    backgroundColor: "#8bc34a",
    color: "white",
    "&:hover": {
      backgroundColor: "#7cb342",
    },
  },
  socialButton: {
    borderRadius: 20, // Bordes redondeados
    backgroundColor: "white",
    borderColor: "#d9d9d9",
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
}));
