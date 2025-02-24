import "./App.css";
import Layout from "./component/Layout";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router";
import Dashboard from "./pages/Dashboard";
import InfoGrafis from "./pages/InfoGrafis";
import AnomaliProteksi from "./pages/AnomaliProteksi/AnomaliProteksi";
import AnomaliJaringan from "./pages/AnomaliJaringan/AnomaliJaringan";
import AnomaliGarduInduk from "./pages/AnomaliGarduInduk/AnomaliGarduInduk";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/Register";
import ProtectedRoute from "./component/ProtectedRoute";
import GarduInduk from "./pages/GarduInduk/GarduInduk";
import { supabase } from "./utils/supabaseClient";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const handleBeforeUnload = async () => {
      await supabase.auth.signOut();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const noLayoutRoutes = ["/login", "/register"];

  return (
    <>
      {noLayoutRoutes.includes(location.pathname) ? (
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      ) : (
        <Layout>
          <Routes>
            <Route element={<ProtectedRoute />}>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/infografis" element={<InfoGrafis />} />
              <Route
                path="/anomali-gardu-induk/*"
                element={<AnomaliGarduInduk />}
              />
              <Route path="/anomali-proteksi/*" element={<AnomaliProteksi />} />
              <Route path="/anomali-jaringan/*" element={<AnomaliJaringan />} />
              <Route path="/gardu-induk/*" element={<GarduInduk />} />
            </Route>
          </Routes>
        </Layout>
      )}
    </>
  );
}

export default App;
