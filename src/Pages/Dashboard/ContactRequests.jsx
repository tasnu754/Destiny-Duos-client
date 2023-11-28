import { Card, Typography } from "@material-tailwind/react";
import { deleteUserContactReq, getUserContactRequest } from "../../APIs/userDashboeard";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";

const TABLE_HEAD = ["Name",  "Biodata Id", "Status", "Mobile No" ,"Email" , "Dlete Request"];
const ContactRequests = () => {
    const { user } = useAuth();

     const { data: TABLE_ROWS = [] , refetch } = useQuery({
       queryKey: ["success story"],
       queryFn: () => getUserContactRequest(user.email),
     });
    
     const handleDelete = async (id) => {
       await deleteUserContactReq(id);

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
                ({
                  name,
                  biodataId,
                  _id,
                  status,
                  mobile_number,
                  contact_email,
                }) => (
                  <tr key={_id} className="even:bg-blue-gray-50/50">
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
                        className={`font-bold ${
                          status === "approved"
                            ? "text-green-500"
                            : "text-red-500"
                        } `}
                      >
                        {status}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {mobile_number}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {contact_email}
                      </Typography>
                    </td>

                    <td className="p-4">
                      <button
                          onClick={() => handleDelete(_id)}
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

export default ContactRequests;