import { useState, useEffect } from "react";
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from "@material-tailwind/react";
import Container from "../Shared/Container/Container";
import { FaHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const NavbarPage = () => {
  const { user, logout } = useAuth();
  const [scrolled, setScrolled] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const handleSignout = () => {
    logout()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) {
        setOpenNav(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navList = (
    <ul className=" font-semibold flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-4  ">
      <Typography as="li" variant="small" className="p-1">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "font-cormorant bg-[#012C3C] text-white text-xl font-bold px-4 py-2 rounded-full shadow-lg transition-all duration-300"
              : "!text-[#285669] !font-greatvibes  text-xl font-bold hover:text-[#012C3C] px-4 py-2 rounded-full hover:bg-gray-100 transition-all duration-300"
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1">
        <NavLink
          to="/biodatas"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-[#012C3C] font-cormorant text-white text-xl font-bold px-4 py-2 rounded-full shadow-lg transition-all duration-300"
              : "text-[#285669] !font-greatvibes text-xl font-bold hover:text-[#012C3C] px-4 py-2 rounded-full hover:bg-gray-100 transition-all duration-300"
          }
        >
          Biodatas
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1">
        <NavLink
          to="/aboutUs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-[#012C3C] font-cormorant text-white text-xl font-bold px-4 py-2 rounded-full shadow-lg transition-all duration-300"
              : "text-[#285669] !font-greatvibes text-xl font-bold hover:text-[#012C3C] px-4 py-2 rounded-full hover:bg-gray-100 transition-all duration-300"
          }
        >
          About Us
        </NavLink>
      </Typography>
      <Typography as="li" variant="small" className="p-1">
        <NavLink
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-[#012C3C] font-cormorant text-white text-xl font-bold px-4 py-2 rounded-full shadow-lg transition-all duration-300"
              : "text-[#285669] !font-greatvibes text-xl font-bold hover:text-[#012C3C] px-4 py-2 rounded-full hover:bg-gray-100 transition-all duration-300"
          }
        >
          Contact
        </NavLink>
      </Typography>
      {/* <Typography as="li" variant="small" className="p-1">
        <NavLink
          to="/signup"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "bg-[#012C3C] font-cormorant text-white text-xl font-bold px-4 py-2 rounded-full shadow-lg transition-all duration-300"
              : "text-[#285669] font-cormorant text-xl font-bold hover:text-[#012C3C] px-4 py-2 rounded-full hover:bg-gray-100 transition-all duration-300"
          }
        >
          Signup
        </NavLink>
      </Typography> */}
      {user && (
        <Typography as="li" variant="small" className="p-1">
          <NavLink
            to="/dashboard"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "bg-[#012C3C] font-cormorant text-white text-xl font-bold px-4 py-2 rounded-full shadow-lg transition-all duration-300"
                : "text-[#285669] !font-greatvibes text-xl font-bold hover:text-[#012C3C] px-4 py-2 rounded-full hover:bg-gray-100 transition-all duration-300"
            }
          >
            Dashboard
          </NavLink>
        </Typography>
      )}
    </ul>
  );

  return (
    <Navbar
      className={` font-sacramento fixed top-0 z-50 h-max max-w-full rounded-none border-none transition-all duration-500 bg-transparent  ${
        scrolled
          ? " backdrop-blur-xl shadow-lg border-b border-gray-200"
          : " backdrop-blur-lg"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-[#012C3C] to-[#285669] rounded-full flex items-center justify-center shadow-lg">
                <FaHeart className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-[#012C3C] !font-greatvibes">
                Destiny Duos
              </span>
              <span className="!text-md text-[#928477] font-medium -mt-1 font-dancing">
                Find Your Perfect Match
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block font -bold">{navList}</div>

          {/* Desktop User Section - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-3 bg-gray-100 rounded-full px-4 py-2">
                  <img
                    className="w-8 h-8 rounded-full border-2 border-[#012C3C]/20"
                    src={user.photoURL}
                    alt={user.displayName}
                  />
                  <span className="font-bold font-greatvibes text-md text-[#285669]">
                    {user.displayName}
                  </span>
                </div>
                <Button
                  onClick={handleSignout}
                  className="bg-[#012C3C] text-white !font-dancing !font-extrabold rounded-full px-6 py-2 hover:bg-[#285669] transition-all duration-300 shadow-lg"
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <Link to="/signup">
                <Button className="!bg-[#012C3C] text-white text-lg !font-dancing rounded-full px-6 py-2 hover:bg-[#285669] transition-all duration-300 shadow-lg">
                  Signup
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button - Only visible on small screens */}
          <IconButton
            variant="text"
            className="ml-auto h-8 w-8 rounded-full text-[#012C3C] hover:bg-gray-100 lg:hidden"
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

        {/* Mobile Collapse Menu - Only visible when openNav is true */}
        <Collapse open={openNav}>
          <div className="pt-4 pb-2 border-t border-gray-200 lg:hidden">
            {navList}
            {user ? (
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-center gap-3 bg-gray-100 rounded-lg p-3">
                  <img
                    className="w-10 h-10 rounded-full border-2 border-[#012C3C]/20"
                    src={user.photoURL}
                    alt={user.displayName}
                  />
                  <div>
                    <p className="text-[#012C3C] font-semibold">
                      {user.displayName}
                    </p>
                    <p className="text-[#285669] text-sm">Welcome back!</p>
                  </div>
                </div>
                <Button
                  onClick={handleSignout}
                  className="bg-[#012C3C] text-white hover:bg-[#285669] rounded-full py-3"
                  fullWidth
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex flex-col gap-2 mt-4">
                <Link to="/signin">
                  <Button
                    className="bg-[#012C3C] text-white hover:bg-[#285669] rounded-full py-3 w-full"
                    fullWidth
                  >
                    Sign In
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button
                    variant="outlined"
                    className="border-[#012C3C] text-[#012C3C] hover:bg-[#012C3C] hover:text-white rounded-full py-3 w-full"
                    fullWidth
                  >
                    Create Account
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPage;
