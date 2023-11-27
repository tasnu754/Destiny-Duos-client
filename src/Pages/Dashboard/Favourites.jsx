import { Card, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { MdDeleteForever } from "react-icons/md";
import {  deleteUserFavBiodata, getUserFavBiodata } from "../../APIs/userDashboeard";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const TABLE_HEAD = ["Name", "Biodata Id", "Permanent Address", "Occupation" , "Delete"];


const Favourites = () => {
    const { user } = useAuth();
    const { data: TABLE_ROWS = [] , refetch } = useQuery({
      queryKey: ["favourites biodata"],
      queryFn: () => getUserFavBiodata(user.email),
    });

    const handleDelete = async (biodataId) => {
        const res = await deleteUserFavBiodata(biodataId);
        console.log(res);
        await refetch();
        Swal.fire({
          icon: "error",
          title: "Done...",
          text: "Deleted Successfully!",
        });
        
    };
  return (
    <div>
      <Card className="h-full w-full overflow-x-scroll">
        <table className="w-full min-w-max table-auto text-left  ">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4 "
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold leading-none opacity-70 text-lg"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              ({ name, biodataId, permanent_division_name, occupation }) => (
                <tr key={name} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-md"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {biodataId}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {permanent_division_name}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {occupation}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <button
                      onClick={() => handleDelete(biodataId)}
                      color="blue-gray"
                      className="font-medium"
                    >
                      <MdDeleteForever className="w-7 h-7"></MdDeleteForever>
                    </button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default Favourites;
