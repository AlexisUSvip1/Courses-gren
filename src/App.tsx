import { CssBaseline } from "@mui/material";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Home } from "./Home/Home";
import Login from "./Login/Login";
import { AuthProvider, useAuth } from "./Auth/Auth.context"; // Importación correcta
import Register from "./Register/Register";
import { SnackbarProvider } from "notistack";

// Componente ProtectedRoute
const ProtectedRoute = () => {
  const { isAutenticate } = useAuth(); // Ahora está dentro del AuthProvider

  if (!isAutenticate) {
    return <Navigate to="/" replace />;
  }

  return <Home />;
};

const App = () => {
  return (
    <AuthProvider>
      {/* El AuthProvider debe envolver toda la aplicación */}
      <SnackbarProvider maxSnack={3}>
        <Router>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/inicio" element={<ProtectedRoute />} />
          </Routes>
        </Router>
      </SnackbarProvider>
    </AuthProvider>
  );
};

export default App;
