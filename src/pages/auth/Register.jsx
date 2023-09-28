import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { Box, Button, Card, Stack, Typography } from "@mui/material";
import InputText from "../../components/Inputs/InputText";
import { FormProvider, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";

const Register = () => {
  const methods = useForm();

  const { handleSubmit } = methods;

  const onSubmit = async (data) => {
    const { email, password } = data;

    console.log(email, password);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res.user);
    } catch (error) {
      console.log(error);
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
      backgroundColor="#f45f5f"
    >
      <Card sx={{ p: 5, width: "500px" }}>
        <Typography variant="h4" align="left" marginBottom="15px">
          Registrarse
        </Typography>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              <Stack spacing={2} direction="row">
                <InputText name="name" label="Nombre" />
                <InputText name="lastname" label="Apellido" />
              </Stack>
              <InputText name="phone" label="Telefono" />
              <InputText name="email" label="Correo Electronico" />
              <Stack spacing={2} direction="row">
                <InputText name="password" label="Contraseña" type="password" />
                <InputText
                  name="password_confirmation"
                  label="Confirmar Contraseña"
                  type="password"
                />
              </Stack>
              <Button type="submit" variant="contained">
                Registrarse
              </Button>
              <NavLink to="/login">
                <Button
                  fullWidth
                  sx={{ backgroundColor: "orange" }}
                  variant="contained"
                >
                  Iniciar Sesion
                </Button>
              </NavLink>
            </Stack>
          </form>
        </FormProvider>
      </Card>
    </Box>
  );
};

export default Register;
