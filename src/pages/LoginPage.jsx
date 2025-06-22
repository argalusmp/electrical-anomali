import { useState } from "react";
// @components
import {
  Card,
  Input,
  Button,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import PasswordInput from "../component/PasswordInput";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { login, session } = useAuth();

  useEffect(() => {
    if (session) {
      navigate("/"); // Redirect ke dashboard jika sudah login
    }
  }, [session, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { data, error } = await login(email, password);

    if (error) {
      setError(error.message);
    } else {
      navigate("/");
    }
    setLoading(false);
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo PLN */}
        <div className="text-center mb-8">
          <img 
            src="/img/Logo_PLN.png" 
            alt="PLN Logo" 
            className="h-16 mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Power Anomali Report
          </h1>
          <p className="text-gray-600 text-sm">
            Sistem Monitoring Anomali PLN
          </p>
        </div>

        <Card 
          shadow={true}
          className="bg-white/80 backdrop-blur-sm border-0 shadow-xl"
        >
          <CardHeader 
            shadow={false} 
            floated={false} 
            className="text-center bg-transparent pb-4"
          >
            <Typography
              variant="h4"
              color="blue-gray"
              className="font-semibold text-gray-800"
            >
              Masuk ke Akun Anda
            </Typography>
            <Typography 
              variant="small" 
              className="text-gray-600 mt-2 font-normal"
            >
              Silakan masukkan kredensial Anda untuk melanjutkan
            </Typography>
            {error && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <span className="text-red-600 text-sm">{error}</span>
              </div>
            )}
          </CardHeader>          <CardBody className="px-8 py-6">
            <form
              onSubmit={handleLogin}
              className="space-y-6"
            >
              <div className="space-y-2">
                <label htmlFor="email">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-medium text-gray-700"
                  >
                    Email Address
                  </Typography>
                </label>
                <Input
                  id="email"
                  color="blue"
                  size="lg"
                  type="email"
                  name="email"
                  placeholder="contoh@email.com"
                  className="!border-gray-300 focus:!border-blue-500 !bg-white"
                  labelProps={{
                    className: "hidden",
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="password">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-medium text-gray-700"
                  >
                    Password
                  </Typography>
                </label>
                <PasswordInput
                  id="password"
                  name="password"
                  placeholder="Masukkan password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 transition-colors duration-200 shadow-lg" 
                fullWidth 
                type="submit"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Memproses...
                  </div>
                ) : (
                  "Masuk"
                )}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <Typography
                variant="small"
                className="text-gray-600"
              >
                Belum punya akun?{" "}
                <a 
                  href="/register" 
                  className="text-blue-600 hover:text-blue-700 font-medium hover:underline transition-colors"
                >
                  Daftar di sini
                </a>
              </Typography>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
