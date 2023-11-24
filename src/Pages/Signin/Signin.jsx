import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const Signin = () => {

    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;
        console.log(email , pass);

      

    }

  return (
    <div className="flex justify-center items-center min-h-[90vh]">
      <Card color="transparent " shadow={false}>
        <Typography
          className="md:text-4xl font-bold text-center mb-2"
          color="blue-gray"
        >
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-bold md:text-2xl">
          To find your partner! Please signin
        </Typography>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 md:text-xl"
            >
              Your Email
            </Typography>
            <Input
              type="email"
              name="email"
              size="lg"
              
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 md:text-lg"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 md:text-xl"
            >
              Password
            </Typography>
            <Input
              type="password"
              name="password"
              size="lg"
              placeholder="********"
            
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 md:text-lg"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button type="submit" className="mt-6 md:text-xl btn1" fullWidth>
            sign in
          </Button>
          <div className="my-4"> 
            <Button
              // onClick={handleGoogle}
              className="btn1 w-full md:text-lg"
            >
              <FaGoogle className="inline text-blue-800 text-xl mr-4"></FaGoogle>{" "}
              S<span className=" lowercase">ignin with </span>Google
            </Button>
          </div>
          <Typography
            color="gray"
            className="mt-4 text-center font-normal md:text-lg"
          >
            Not Signup?{" "}
            <Link to="/signup" className="font-medium text-gray-900 underline">
              Sign up
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Signin;
