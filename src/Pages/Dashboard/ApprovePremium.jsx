import { Card, Typography } from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../APIs/users";
import { changeRole } from "../../APIs/adminDashboard";
import Swal from "sweetalert2";


const TABLE_HEAD = ["Name", "Email", "Make premium"];

const ApprovePremium = () => {

    const { data: table = [], refetch } = useQuery({
      queryKey: ["users data"],
      queryFn: () => getAllUsers(),
    });

    const TABLE_ROWS = table.filter((item) => item.role === "requested");

    const handlePremium = async (userEmail, role) => {
      await changeRole(userEmail, role);
      await refetch();
      Swal.fire({
        title: "Updated!",
        text: `Made the user ${role} successfully!`,
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
              {TABLE_ROWS.map(({ userEmail, userName, role }) => (
                <tr key={userName} className="even:bg-blue-gray-50/50">
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal text-md"
                    >
                      {userName}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {userEmail}
                    </Typography>
                  </td>
                  
                  <td className="p-4">
                    <button
                      onClick={() => handlePremium(userEmail, "Premium")}
                      disabled={role === "Premium"}
                      color="blue-gray"
                      className={`font-medium ${
                        role === "Premium" ? "bg-green-300" : "bg-red-200 "
                      }  p-2 rounded-md ${
                        role === "Premium"
                          ? "hover:bg-green-300"
                          : "hover:bg-red-300"
                      }  `}
                    >
                      {role === "Premium" ? "Premium" : "Make Premium"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>
    );
};

export default ApprovePremium;