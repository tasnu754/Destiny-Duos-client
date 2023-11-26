// import { Spinner } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import { getRole } from "../../APIs/users";
import useAuth from "../../Hooks/useAuth";
import BiodataSingleDetails from "./BiodataSingleDetails";
import OthersBiodata from "../../Components/OthersBiodata/OthersBiodata";
import { addFav } from "../../APIs/favourites";
import Swal from "sweetalert2";


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
    
  
  const handleFavourite = async (biodataItem) => {
    const item = {
      ...biodataItem,
      userEmail: user.email,
      userName: user.displayName,
      userImg: user.photoURL,
      userRole: user.role
    };

    const result = await addFav(item);
    if (result.insertedId) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Biodata added to favourites!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  
 

    return (
      <div className="lg:grid grid-cols-6 gap-4 border-2">
        <div className=" col-span-2">
          <BiodataSingleDetails
            biodataDetails={biodataDetails.biodata}
            role={role}
            handleFavourite={handleFavourite}
          ></BiodataSingleDetails>
        </div>
        <div className=" col-span-4">
          <h2 className="text-3xl text-center font-bold py-4">
            Others Profile
          </h2>
          <div className="lg:grid grid-cols-2 gap-14 space-y-4 px-10">
            {others.map((other, i) => (
              <OthersBiodata
                key={i}
                other={other}
                role={role}
                handleFavourite={handleFavourite}
              ></OthersBiodata>
            ))}
          </div>
        </div>
      </div>
    );
};

export default BiodataDetails;