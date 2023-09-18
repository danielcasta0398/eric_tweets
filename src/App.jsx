import React from "react";
import "./app.css";
import Router from "./router/Router";
import AuthLogin from "./auth/AuthLogin";

const App = () => {
  return (
    <AuthLogin>
      <Router />
    </AuthLogin>
  );
};

export default App;
