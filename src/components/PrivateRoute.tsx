// PrivateRoute.tsx
import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import useAuth from "../hooks/use-auth-context";

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
