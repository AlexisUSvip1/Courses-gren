import React from "react"; // Importación de React (opcional en React 17+ pero buena práctica)
import { CssBaseline } from "@mui/material"; // Reseteo de estilos globales con Material UI
import Login from "./Login/Login";

function App() {
  return (
    <>
      <CssBaseline />

      <Login />
    </>
  );
}

export default App;
