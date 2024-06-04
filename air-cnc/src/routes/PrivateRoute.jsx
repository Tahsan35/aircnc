import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import Loader from "../components/Shared/Loader";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <Loader />;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};
export default PrivateRoute;
