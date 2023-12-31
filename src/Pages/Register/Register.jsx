import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import { imgURL } from "../../APIs/utils";
import useAuth from "../../Hooks/useAuth";
import { postUser } from "../../APIs/users";

const Register = () => {
    const { register, ProfileUpdate } = useAuth();

    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const pass = form.password.value;

      const image = form.image.files[0];
   

    try {
      const imgurlData = await imgURL(image);
      const imgurl = imgurlData.data.display_url;

      const result = await register(email, pass);
      const user = result.user;
      console.log(user);
      form.reset();

      
      await ProfileUpdate(name, imgurl);
      //  location.reload();
  

      const UserPost = {
        userEmail: email,
        role: "user",
        userName: name,
        userPhoto: imgurl,
      };

     await postUser(UserPost);
     
     

      form.reset();
    } catch (error) {
      console.log(error.message);
    }


}

  return (
    <div className="flex justify-center items-center min-h-[90vh] ">
      <Card shadow={false}>
        <Typography
          className="md:text-4xl font-bold text-center my-4"
          color="blue-gray"
        >
          Sign Up
        </Typography>
        <Typography color="gray" className="mt-1 font-bold md:text-2xl text-center">
          To find your partner! <br /> Please register
        </Typography>
        <form
          onSubmit={handleSubmit}
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-2 p-6">
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3  md:text-xl"
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
              className="-mb-3 mt-4 md:text-xl "
            >
              Your Image
            </Typography>
            <Input
              type="file"
              name="image"
              size="lg"
              placeholder="Image"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 md:text-lg h-[50px]"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 md:text-xl mt-4"
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
              className="-mb-3 md:text-xl mt-4"
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
          <Checkbox className="ml-4"
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
