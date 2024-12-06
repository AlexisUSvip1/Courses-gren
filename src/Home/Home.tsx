import { Box, Typography } from "@mui/material";
import { useAuth } from "../Auth/Auth.context";
import { Navbar } from "../Components/Navbar/Navbar";

export const Home = () => {
  const { user } = useAuth();
  return (
    <>
      <Navbar />
      <Box
        sx={{
          marginTop: "40px",
          background: "rgba(53,89,25,0.4)",
          maxWidth: "20%",
          borderTopRightRadius: "20px",
          borderBottomRightRadius: "20px",
        }}
      >
        <Typography variant="h6" fontWeight={"bold"}>
          Bienvenido, {user?.displayName}
        </Typography>{" "}
      </Box>
    </>
  );
};
