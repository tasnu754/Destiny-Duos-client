// import { Spinner } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import { getRole } from "../../APIs/users";
import useAuth from "../../Hooks/useAuth";
import BiodataSingleDetails from "./BiodataSingleDetails";
import OthersBiodata from "../../Components/OthersBiodata/OthersBiodata";


const BiodataDetails = () => {
    const biodataDetails = useLoaderData();
    const { user } = useAuth();
    
   const { data: role } = useQuery({
    queryKey: ["role"],
    queryFn: () => getRole(user.email),
   });
   
  const others = biodataDetails.others.filter(
    (other) => biodataDetails.biodata.biodataId != other.biodataId
  );
    
    //    console.log(biodataDetails);
       console.log("role", role);
//   if (isLoading) {
//     return (
//       <div className="flex justify-center items-center h-[80vh]">
//         <Spinner className="h-16 w-16 text-gray-900/50 " />
//       </div>
//     );
//     }
 

    return (
      <div className="lg:grid grid-cols-6 gap-4">
        <div className=" col-span-2">
          <BiodataSingleDetails
            biodataDetails={biodataDetails.biodata}
            role={role}
          ></BiodataSingleDetails>
        </div>
        <div className=" col-span-3">
          <h2 className="text-3xl text-center font-bold py-4">
            Others Profile
          </h2>
          <div className="lg:grid grid-cols-2 gap-6">
            {others.map((other, i) => (
              <OthersBiodata key={i} other={other} role={role}></OthersBiodata>
            ))}
          </div>
        </div>
      </div>
    );
};

export default BiodataDetails;