import { useEffect, useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { Navigate, Outlet } from "react-router";
import Loading from "./Loading";

const ProtectedRoute = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cek session saat pertama kali load
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setSession(session);
      setLoading(false);
    };

    getSession();
    // Langganan perubahan autentikasi
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    // Cleanup listener ketika komponen unmount
    return () => {
      authListener?.subscription?.unsubscribe();
    };
  }, []);

  if (loading) return <Loading />;

  // Jika tidak ada session, redirect ke halaman login
  if (!session) {
    return <Navigate to="/login" />;
  }

  // Jika session ada, render komponen anak melalui Outlet
  return <Outlet />;
};

export default ProtectedRoute;
