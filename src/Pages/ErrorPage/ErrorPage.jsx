import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
      <div className="bg-orange-600 h-screen flex justify-center items-center">
        <div className="flex justify-between items-center gap-16 h-auto w-1/2 mx-auto">
          <img
            className="h-[500px]"
            src="https://i.ibb.co/LPRdK5F/13315300-5203299.jpg"
            alt=""
          />
          <NavLink className="btn1  w-1/2" to="/">
            Go Back To Home
          </NavLink>
        </div>
      </div>
    );
};

export default ErrorPage;