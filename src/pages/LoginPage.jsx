import React, { useState } from "react";
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
import { supabase } from "../utils/supabaseClient";
import { useEffect } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate("/"); // Redirect ke dashboard jika sudah login
      }
      if (!data.session) {
        navigate("/login");
      }
      setLoading(false);
    };

    checkSession();
  }, [navigate]);


  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { user, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      navigate("/");
    }
    setLoading(false);

  };

  return (
    <div className="container-login-page">
      <Card
        shadow={false}
        className="md:px-24 md:py-14 py-8 border border-gray-300 w-1/2 mx-auto my-auto mt-20"
      >
        <CardHeader shadow={false} floated={false} className="text-center">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 !text-3xl lg:text-4xl"
          >
            Silahkan Login
          </Typography>
          {error && <span className="text-red-500">{error}</span>}
          {/* <Typography className="!text-gray-600 text-[18px] font-normal md:max-w-sm">
          Jaya jaya jaya.
        </Typography> */}
        </CardHeader>
        <CardBody>
          <form
            onSubmit={handleLogin}
            action="#"
            className="flex flex-col gap-4"
          >
            <div>
              <label htmlFor="email">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="block font-medium mb-2"
                >
                  Your Email
                </Typography>
              </label>
              <Input
                id="email"
                color="gray"
                size="lg"
                type="email"
                name="email"
                placeholder="name@mail.com"
                className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
                labelProps={{
                  className: "hidden",
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="block font-medium mb-2"
                >
                  Your Password
                </Typography>
              </label>
              <Input
                id="password"
                color="gray"
                size="lg"
                type="password"
                name="password"
                placeholder="xxxxxxxxxxxx"
                className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200"
                labelProps={{
                  className: "hidden",
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button size="lg" color="gray" fullWidth type="submit">
            {loading ? "Loading..." : "Login"}
            </Button>
          </form>
          <div className="toRegister mt-3">
            <Typography
              variant="small"
              color="blue-gray"
              className="block font-medium mb-2"
            >
              Don't have an account ? <span className="text-blue-600"> <a href="/register" >Register</a></span>
            </Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default LoginPage;
