import { SetStateAction, useEffect, useState } from "react";
import axios from "axios";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Comprueba si el usuario está autenticado
    axios
      .get("http://localhost:3000/auth/me", { withCredentials: true })
      .then((response: { data: SetStateAction<null> }) => {
        setUser(response.data);
      })
      .catch(() => {
        setUser(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { user, isLoading };
};

export default useAuth;
