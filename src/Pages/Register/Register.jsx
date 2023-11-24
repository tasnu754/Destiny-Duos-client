import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import { imgURL } from "../../APIs/utils";

const Register = () => {

    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const pass = form.password.value;

        const image = form.image.files[0];

        const imgurlData = await imgURL(image);
        const imgurl = imgurlData.data.display_url;
        console.log(imgurl);
      

    }

  return (
    <div className="flex justify-center items-center min-h-[90vh]">
      <Card color="transparent " shadow={false}>
        <Typography
          className="md:text-4xl font-bold text-center mb-2"
          color="blue-gray"
        >
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-bold md:text-2xl">
          To find your partner! Please register
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
              Your Name
            </Typography>
            <Input
              type="text"
              name="name"
              size="lg"
             
              placeholder="Name"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 md:text-lg"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 md:text-xl "
            >
              Your Image
            </Typography>
            <Input
              type="file"
              name="image"
              size="lg"
             
              placeholder="Image"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 md:text-lg h-14"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
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
          <Button type="submit" className="mt-6 md:text-xl" fullWidth>
            sign up
          </Button>
          <Typography
            color="gray"
            className="mt-4 text-center font-normal md:text-lg"
          >
            Already have an account?{" "}
            <Link to="/signin" className="font-medium text-gray-900 underline">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
};

export default Register;
