import React from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,


} from "@material-tailwind/react";
import Container from "../Shared/Container/Container";
 import { GiEngagementRing } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";


const NavbarPage = () => {
  const { user, logout } = useAuth();
   const handleSignout = () => {
     logout()
       .then(() => {})
       .catch((error) => console.log(error));
   };

 

    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
      window.addEventListener(
        "resize",
        () => window.innerWidth >= 960 && setOpenNav(false)
      );
    }, []);

    const navList = (
      <ul className="mt-2 mb-4 font-bold flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <Typography as="li" variant="small" className="p-1 text-xl">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-gray-600 text-white  text-xl p-4 rounded-md"
                : ""
            }
          >
            Home
          </NavLink>
        </Typography>
        <Typography as="li" variant="small" className="p-1 text-xl">
          <NavLink
            to="/biodatas"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-gray-600 text-white  text-xl p-4 rounded-md"
                : ""
            }
          >
            Biodatas
          </NavLink>
        </Typography>
        <Typography as="li" variant="small" className="p-1 text-xl">
          <NavLink
            to="/aboutUs"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-gray-600 text-white  text-xl p-4 rounded-md"
                : ""
            }
          >
            About Us
          </NavLink>
        </Typography>
        <Typography as="li" variant="small" className="p-1 text-xl">
          <NavLink
            to="/contact"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-gray-600 text-white  text-xl p-4 rounded-md"
                : ""
            }
          >
            Contact
          </NavLink>
        </Typography>
        <Typography as="li" variant="small" className="p-1 text-xl">
          <NavLink
            to="/signup"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-gray-600 text-white  text-xl p-4 rounded-md"
                : ""
            }
          >
            Signup
          </NavLink>
        </Typography>
        {user && <Typography as="li" variant="small" className="p-1 text-xl">
          <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-gray-600 text-white  text-xl p-4 rounded-md"
                : ""
            }
          >
            Dashboard
          </NavLink>
        </Typography>}
      </ul>
    );
 
  
  

  // if (loading) {
  //   return <Spinner></Spinner>
  // }

  return (
    <Navbar className="md:sticky bg-opacity-20 bg-black text-white top-0 z-10 h-max max-w-full rounded-none  shadow-md lg:text-xl border-none">
      <Container>
        <div className="flex items-center justify-between ">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-medium flex gap-64"
          >
            <div className="flex justify-center items-center gap-2 font-bold lg:text-2xl">
              <GiEngagementRing className="text-3xl text-yellow-700"></GiEngagementRing>
              <p className=" text-cyan-700"> Destiny Duos</p>
            </div>
            <div className="mr-4 hidden lg:block">{navList}</div>
          </Typography>
          <div className="flex  items-center gap-4">
            {/* <div className="mr-4 hidden lg:block">{navList}</div> */}
            {user ? (
              <div className="md:flex justify-between items-center gap-4 hidden ">
                <p className="text-white text-xl inline">{user.displayName}</p>
                <img
                  className="w-10 h-10 rounded-full inline ml-4"
                  src={user.photoURL}
                  alt=""
                />
                <Button onClick={handleSignout} className="btn1 text-lg">
                  Signout
                </Button>
              </div>
            ) : (
              <Link to="/signin" className="flex items-center gap-x-1">
                <Button
                  variant="gradient"
                  size="sm"
                  className="hidden btn1 lg:inline-block md:text-lg"
                >
                  <span>Sign in</span>
                </Button>
              </Link>
            )}
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          {user ? (
            <div className="flex flex-col-reverse justify-between items-center gap-4 ">
              <div className="bg-blue-gray-800 p-4 my-2 rounded-md">
                <p className="text-white text-xl inline">{user.displayName}</p>
                <img
                  className="w-10 h-10 rounded-full inline ml-4"
                  src={user.photoURL}
                  alt=""
                />
              </div>
              <Button onClick={handleSignout} className="btn1 text-lg">
                Signout
              </Button>
            </div>
          ) : (
            <Link to="/signin" className="flex items-center gap-x-1">
              <Button
                onClick={handleSignout}
                className="btn1 text-lg"
                fullWidth
              >
                <span>Sign in</span>
              </Button>
            </Link>
          )}
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPage;
