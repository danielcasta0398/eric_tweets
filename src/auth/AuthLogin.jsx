const AuthLogin = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    console.log("token not found");
  }

  return children;
};

export default AuthLogin;
