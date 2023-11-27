import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import MenuItem from "./MenuItem";
import { FaEye } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { MdFavorite } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import { getRole } from "../../APIs/users";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "@material-tailwind/react";
import { GiEngagementRing } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";
import { MdFileDownloadDone } from "react-icons/md";
import { IoGitPullRequest } from "react-icons/io5";
import { FaChartPie } from "react-icons/fa";

const Sidebar = () => {
    const [isActive, setActive] = useState(false);
    const { user } = useAuth();

     const handleToggle = () => {
       setActive(!isActive);
     };


       const { data: role , isLoading } = useQuery({
         queryKey: ["role"],
         queryFn: () => getRole(user.email),
       });


       if (isLoading) {
         return (
           <div className="flex justify-center items-center py-10">
             <Spinner className="h-16 w-16 text-gray-900/50 " />
           </div>
         );
       }


   
  return (
    <>
      {/* Small device  */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold text-xl text-yellow-800">
            Desdiny Duos
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="p-4 focus:outline-none focus:bg-gray-200"
        >
          <IoMdMenu className="h-5 w-5"></IoMdMenu>
        </button>
      </div>

      {/* Big Device  */}
      <div
        className={`z-10 md:fixed h-full flex flex-col justify-between overflow-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 ${
          isActive && " -translate-x-full"
        }  md:translate-x-0 transition duration-200 ease-in-out `}
      >
        <div>
          {role === "user" || role === "Premium" ? (
            <>
              <MenuItem
                label="Create/Edit Biodata"
                address="editBiodata"
                icon={FaEdit}
              ></MenuItem>

              <MenuItem
                label="View Biodata"
                address="viewBiodata"
                icon={FaEye}
              ></MenuItem>
              <MenuItem
                label="My Contact Request"
                address="contactRequest"
                icon={IoMdContacts}
              ></MenuItem>
              <MenuItem
                label="Favourites Biodata "
                address="favourites"
                icon={MdFavorite}
              ></MenuItem>
              <MenuItem
                label="Got Married?"
                address="married"
                icon={GiEngagementRing}
              ></MenuItem>
            </>
          ) : (
            <>
              <MenuItem
                label="Admin Dashboard"
                address="adminDashboard"
                icon={MdDashboard}
              ></MenuItem>

              <MenuItem
                label="Manage Users"
                address="manageUsers"
                icon={MdManageAccounts}
              ></MenuItem>
              <MenuItem
                label="Approved Premium"
                address="approvePremium"
                icon={MdFileDownloadDone}
              ></MenuItem>
              <MenuItem
                label="Approved Request"
                address="approveContactReq"
                icon={IoGitPullRequest}
              ></MenuItem>
              <MenuItem
                label="Statistics"
                address="statistic"
                icon={FaChartPie}
              ></MenuItem>
            </>
          )}
        </div>
        <hr />
        <div className="flex items-center px-4 py-2 my-5  transition-colors duration-300 transform hover:bg-gray-300  text-gray-700">
          <button className="flex justify-center items-center p-4 ">
            <IoIosLogOut className="w-7 h-7"></IoIosLogOut>
            <span className="mx-4 font-medium text-xl">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
