import { Outlet } from "react-router-dom";
import NavbarPage from "../../Components/Navbar/NavbarPage";
import Footer from "../../Components/Footer/Footer";

const Mainpage = () => {
    return (
      <div className="font-Raleway">
        <NavbarPage></NavbarPage>
        <div className=" min-h-[calc(100vh-218px)]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
};

export default Mainpage;