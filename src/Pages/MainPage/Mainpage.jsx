import { Outlet } from "react-router-dom";
import NavbarPage from "../../Components/Navbar/NavbarPage";
import Footer from "../../Components/Footer/Footer";

const Mainpage = () => {
    return (

        <div className="font-Raleway">
          <NavbarPage></NavbarPage>
          <Outlet></Outlet>
          <Footer></Footer>
        </div>

    );
};

export default Mainpage;