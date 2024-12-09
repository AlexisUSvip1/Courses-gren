import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import { enqueueSnackbar } from "notistack";

// Define el tipo del usuario
interface User {
  displayName: string;
  emails: { value: string; verified: boolean }[];
  photos: { value: string }[];
  provider: string;
}

// Define el tipo del contexto
interface AuthContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  isAutenticate: boolean;
  setIsAutenticate: (isAutenticate: boolean) => void;
  registerUser?: (
    email: string,
    password: string,
    displayName: string,
    age: string,
    date: string
  ) => void; // Nuevo método
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAutenticate, setIsAutenticate] = useState<boolean>(false);

  useEffect(() => {
    // Hacemos la solicitud al backend para obtener los datos del usuario autenticado
    axios
      .get("http://localhost:3000/auth/me", { withCredentials: true })
      .then((response) => {
        if (response.data) {
          setUser(response.data); // Guardamos el usuario en el estado
          setIsAutenticate(true);
        }
      })
      .catch(() => {
        setUser(null); // En caso de error, el usuario es null
        setIsAutenticate(false); // Si falla la solicitud, la autenticación es falsa
      });
  }, []);

  // Función para registrar un usuario
  const registerUser = (
    email: string,
    password: string,
    displayName: string,
    age: string,
    date: string
  ) => {
    axios
      .post(
        "http://localhost:3000/auth/register",
        { email, password, displayName, age, date },
        { withCredentials: true }
      )
      .then((response) => {
        if (response.data) {
          setUser(response.data); // Guardamos el nuevo usuario en el estado
          setIsAutenticate(true); // Marcamos como autenticado
          enqueueSnackbar(response.data.message, { variant: "success" }); // Notificación de éxito
        }
      })
      .catch((err) => {
        const errorMessage =
          err.response?.data?.message || "Error al registrar";
        enqueueSnackbar(errorMessage, { variant: "error" }); // Notificación de error
      });
  };

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAutenticate, setIsAutenticate, registerUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};


// Hook personalizado para usar el contexto
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
