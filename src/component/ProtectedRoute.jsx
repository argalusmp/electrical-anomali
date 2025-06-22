import { Navigate, Outlet } from "react-router";
import Loading from "./Loading";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { session, loading } = useAuth();

  if (loading) return <Loading />;

  // Jika tidak ada session, redirect ke halaman login
  if (!session) {
    return <Navigate to="/login" />;
  }

  // Jika session ada, render komponen anak melalui Outlet
  return <Outlet />;
};

export default ProtectedRoute;
