import { useState } from "react";
import { useSnackbar } from "notistack";
import { useAuth } from "../Auth/Auth.context"; // Importamos el contexto de autenticación
import { UseRegisterForm } from "./Register.types";

export const useRegisterForm = (): UseRegisterForm => {
  const { registerUser } = useAuth(); // Accedemos al método de registro desde el contexto
  const { enqueueSnackbar } = useSnackbar(); // Hook para las notificaciones

  // Estados del formulario
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [age, setAge] = useState("");
  const [date, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleRegister = async () => {
    setIsLoading(true);
    setError("");

    // Validaciones
    if (
      !email ||
      !password ||
      !confirmPassword ||
      !displayName ||
      !age ||
      !date
    ) {
      enqueueSnackbar("Por favor, complete todos los campos.", {
        variant: "error",
      });
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      enqueueSnackbar("Las contraseñas no coinciden.", { variant: "error" });
      setIsLoading(false);
      return;
    }

    try {
      const response = await registerUser(
        email,
        password,
        displayName,
        age,
        date
      );
      enqueueSnackbar(response.message, { variant: "success" });
    } finally {
      setIsLoading(false);
    }
  };

  return {
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
  };
};
