import { CssBaseline } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./Home/Home";
import Login from "./Login/Login";
import { AuthProvider, useAuth } from "./Auth/Auth.context";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Login />} />
          {/* Ruta protegida, redirige al login si no está autenticado */}
          <Route path="/inicio" element={<ProtectedRoute />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

// Componente ProtectedRoute
const ProtectedRoute = () => {
  const { user } = useAuth(); // Obtén el estado de autenticación desde el contexto de Auth

  // Si no hay usuario (no autenticado), redirige al login
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Si está autenticado, muestra la página Home
  return <Home />;
};

export default App;
