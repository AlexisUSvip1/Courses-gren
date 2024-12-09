export interface UseRegisterForm {
  email: string;
  password: string;
  confirmPassword: string;
  displayName: string;
  age: string;
  date: string;
  isLoading: boolean;
  error: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setConfirmPassword: (confirmPassword: string) => void;
  setDisplayName: (displayName: string) => void;
  setAge: (age: string) => void;
  setDate: (date: string) => void;
  handleRegister: () => Promise<void>;
}
