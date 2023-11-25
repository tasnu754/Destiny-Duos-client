import { Spinner } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import { getRole } from "../../APIs/users";
import useAuth from "../../Hooks/useAuth";
import BiodataSingleDetails from "./BiodataSingleDetails";

const BiodataDetails = () => {
    const { user } = useAuth();
    const biodataDetails = useLoaderData();
  const { data: role , isLoading } = useQuery({
    queryKey: ["role"],
    queryFn: () => getRole(user.email),
  });

  if (isLoading) {
    return <Spinner className="h-16 w-16 text-gray-900/50" />;
  }

    // console.log(biodataDetails , role);
    return (
  
        <div className="md:grid grid-cols-6 gap-4">
          <div className=" col-span-2">
            <BiodataSingleDetails
              biodataDetails={biodataDetails.biodata}
              role={role}
            ></BiodataSingleDetails>
          </div>
          <div className=" col-span-3">dryery</div>
        </div>

    );
};

export default BiodataDetails;