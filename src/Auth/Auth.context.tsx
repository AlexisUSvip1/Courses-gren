import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

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
  setIsAutenticate: (isAutenticate: boolean) => void; // Corregido el tipo aquí
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

  return (
    <AuthContext.Provider
      value={{ user, setUser, isAutenticate, setIsAutenticate }}
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
