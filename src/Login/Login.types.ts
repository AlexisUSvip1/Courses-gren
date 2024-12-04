// Datos del formulario de inicio de sesión
export interface LoginFormData {
  username: string;
  password: string;
}

// Respuesta del backend tras iniciar sesión
export interface LoginResponse {
  success: boolean;
  token?: string; // Token JWT u otro tipo de autenticación
  message?: string; // Mensaje de error o confirmación
}

// Estado para manejar el proceso de inicio de sesión
export interface LoginState {
  isLoading: boolean; // Indica si el login está en proceso
  error?: string; // Mensaje de error en caso de fallo
}
