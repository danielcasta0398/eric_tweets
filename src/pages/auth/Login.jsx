import { Box, Button, Card, Stack, Typography } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import InputText from "../../components/Inputs/InputText";
import { FormProvider, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const Login = () => {
  const methods = useForm();

  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    const { email, password } = data;

    console.log(email, password);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      console.log(res.user);
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Card sx={{ p: 5, width: "400px" }}>
        <Typography variant="h4" align="left" marginBottom="15px">
          Iniciar Sesion
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <InputText name="email" label="Correo Electronico" />
              <InputText name="password" label="Contraseña" />
              <Button type="submit" variant="contained">
                Ingresar
              </Button>
              <NavLink to="/register">
                <Button
                  fullWidth
                  sx={{ backgroundColor: "orange" }}
                  variant="contained"
                >
                  Registrarse
                </Button>
              </NavLink>
            </Stack>
          </form>
        </FormProvider>
      </Card>
    </Box>
  );
};

export default Login;
