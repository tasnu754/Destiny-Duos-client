import { Outlet } from "react-router-dom";
import NavbarPage from "../../Components/Navbar/NavbarPage";
import Footer from "../../Components/Footer/Footer";

// max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full

const Mainpage = () => {
  return (
    <div className="">
      <NavbarPage></NavbarPage>
      <div className=" min-h-[calc(100vh-218px)] ">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Mainpage;
