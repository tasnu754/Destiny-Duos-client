import { useQuery } from "@tanstack/react-query";
import { getUserBiodata } from "../../APIs/biodatas";
import useAuth from "../../Hooks/useAuth";
import { getRole, postUser } from "../../APIs/users";
import Swal from "sweetalert2";

const ViewBiodata = () => {
    const { user } = useAuth();
    const { data: biodataDetails = {} } = useQuery({
      queryKey: ["biodata"],
      queryFn: () => getUserBiodata(user.email),
    });

    const { data: role } = useQuery({
      queryKey: ["role"],
      queryFn: () => getRole(user.email),
    });

    const handleMakePremium = async () => {
 
      const updateRoleUser = {
        userEmail: user?.email,
        role: "requested",
        userName: user?.displayName,
        userPhoto: user?.photoURL,
      };

        
        Swal.fire({
          title: "Are you sure to make your biodata premium?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Yes",
          denyButtonText: `No`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
              postUser(updateRoleUser)
                  .then(res => {
                      console.log(res);
                   Swal.fire(
                     "Request send! Please wait for admin approval",
                     "",
                     "success"
                   );
              })
             
           
          } else if (result.isDenied) {
            Swal.fire("Can not send the request", "", "info");
          }
        });
    };
    return (
      <div className="p-10  border-r-2 bg-yellow-300 h-full">
        <div className="h-52 w-52 lg:w-[30%] mx-auto lg:h-[400px] overflow-hidden rounded-full">
          <img
            className="w-full  h-full object-cover"
            src={biodataDetails?.image}
            alt=""
          />
        </div>
        <h2 className="md:text-2xl font-bold text-yellow-900 text-center py-6">
          {biodataDetails?.name}
        </h2>
        <div className="space-y-2 md:text-xl font-bold  lg:pl-40  lg:w-[70%] mx-auto lg:grid grid-cols-2 text-gray-700">
          <p>Biodata Id : {biodataDetails?.biodataId}</p>
          <p>Age : {biodataDetails?.age}</p>
          <p>Height : {biodataDetails?.height}</p>
          <p>Weight : {biodataDetails?.weight}</p>
          <p>Birth Date : {biodataDetails?.date_of_birth}</p>
          <p>Occupation : {biodataDetails?.occupation}</p>
          <p>Race : {biodataDetails?.race}</p>
          <p>Fathers Name : {biodataDetails?.fathers_name}</p>
          <p>Mothers Name : {biodataDetails?.mothers_name}</p>
          <p>Permanent Divison : {biodataDetails?.permanent_division_name}</p>
          <p>Present Divison : {biodataDetails?.present_division_name}</p>
          <p>Expected Partner Age : {biodataDetails?.expected_partner_age}</p>
          <p>
            Expected Partner Height : {biodataDetails?.expected_partner_height}
          </p>
          <p>
            Expected Partner Wight : {biodataDetails?.expected_partner_weight}
          </p>
        </div>
        {role === "user" || role==="requested" && (
          <div className="w-[50%] mx-auto py-6 text-center">
            <button
              onClick={handleMakePremium}
              type="submit"
              className="btn1  md:w-full  flex items-center justify-center"
            >
              Make Premium
            </button>
          </div>
        )}
      </div>
    );
};

export default ViewBiodata;