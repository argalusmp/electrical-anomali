import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import { Link, useNavigate } from "react-router";
import { Button, Card, CardBody, CardHeader, Input, Typography } from "@material-tailwind/react";
import { useEffect } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        navigate("/"); // Redirect ke dashboard jika sudah login
      }
      setLoading(false);
    };

    checkSession();
  }, [navigate]);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { user, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      navigate("/login");
    }

    setLoading(false);
  };

  return (
    <div className="container-login-page">
      <Card
        shadow={false}
        className="mx-auto my-auto lg:mt-20 md:w-1/2 sm:w-1/2"
      >
        <CardHeader shadow={false} floated={false} className="text-center">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 !text-3xl lg:text-4xl"
          >
            Register
          </Typography>
          {error && <p className="text-red-500">{error}</p>}
          {/* <Typography className="!text-gray-600 text-[18px] font-normal md:max-w-sm">
        Jaya jaya jaya.
      </Typography> */}
        </CardHeader>
        <CardBody>
          <form
            onSubmit={handleRegister}
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
                  Set your Email
                </Typography>
              </label>
              <Input
                id="email"
                color="gray"
                size="lg"
                type="email"
                name="email"
                placeholder="name@mail.com"
                className="!w-full placeholder:!opacity-100 focus:!border-t-primary !border-t-blue-gray-200 text-black"
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
                  Create Your Password
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
              {loading ? "Loading..." : "Register"}
            </Button>
          </form>
          <div className="toRegister mt-3">
            <Typography
              variant="small"
              color="blue-gray"
              className="block font-medium mb-2"
            >
              Already have an account ?{" "}
              <span className="text-blue-600">
                {" "}
                <Link to="/register">Register</Link>
              </span>
            </Typography>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Register;
