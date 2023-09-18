import { Box, Button, Card, Stack, Typography } from "@mui/material";
import React from "react";
import InputText from "../../components/Inputs/InputText";
import { FormProvider, useForm } from "react-hook-form";

const Login = () => {
  const methods = useForm();

  const { handleSubmit } = methods;

  const onSubmit = (data) => {
    console.log(data);
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
              <Button variant="contained">Ingresar</Button>
            </Stack>
          </form>
        </FormProvider>
      </Card>
    </Box>
  );
};

export default Login;
