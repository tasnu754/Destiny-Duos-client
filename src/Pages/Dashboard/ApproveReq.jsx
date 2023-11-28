import { Card, Typography } from "@material-tailwind/react";
import { approveContact, getContactRequests } from "../../APIs/adminDashboard";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const TABLE_HEAD = ["Name", "Email", "Biodata Id" , "Approve Contact Request"];
const ApproveReq = () => {
  const { data: TABLE_ROWS = [], refetch } = useQuery({
    queryKey: ["Contact Requests"],
    queryFn: () => getContactRequests(),
  });

   const handleApprove = async (id) => {
       const res = await approveContact(id);
       console.log(res);
     await refetch();
     Swal.fire({
       title: "Updated!",
       text: `Approved the contact request!`,
       icon: "success",
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
              ({ contact_email, name, biodataId, status, _id }) => (
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
                      {contact_email}
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
                    <button
                        onClick={() => handleApprove(_id)}
                      disabled={status === "approved"}
                      color="blue-gray"
                      className={`font-medium ${
                        status === "approved" ? "bg-green-300" : "bg-red-200 "
                      }  p-2 rounded-md ${
                        status === "approved"
                          ? "hover:bg-green-300"
                          : "hover:bg-red-300"
                      }  `}
                    >
                      {status === "requested"
                        ? "Click here to Approve"
                        : "Approved"}
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

export default ApproveReq;