import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const Auth = () => {
  const isLogin = Boolean(localStorage.getItem("auth-token"));
  return isLogin ? <Outlet /> : <Navigate replace to="/login" />;
};

export default Auth;
