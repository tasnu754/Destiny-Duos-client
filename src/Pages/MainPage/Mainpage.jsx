import { Outlet } from "react-router-dom";
import NavbarPage from "../../Components/Navbar/NavbarPage";

const Mainpage = () => {
    return (

        <div className="font-Raleway">
          <NavbarPage></NavbarPage>
          <Outlet></Outlet>
        </div>

    );
};

export default Mainpage;