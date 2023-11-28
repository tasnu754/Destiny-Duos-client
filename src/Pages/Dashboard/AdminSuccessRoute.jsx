import { Avatar, Card, CardBody, CardHeader, Rating, Typography } from "@material-tailwind/react";
import { getAllSuccessStory } from "../../APIs/successStory";
import { useQuery } from "@tanstack/react-query";
import {
  Button,
  Dialog,
} from "@material-tailwind/react";
import { useState } from "react";


const TABLE_HEAD = ["Male Biodata Id", "Female Biodata Id", "View Story"];
const AdminSuccessRoute = () => {
      const { data: TABLE_ROWS = [] } = useQuery({
        queryKey: ["success story"],
        queryFn: () => getAllSuccessStory(),
      });
    
    const [openDialogs, setOpenDialogs] = useState([]);

    const handleOpen = (index) => {
      const newOpenDialogs = [...openDialogs];
      newOpenDialogs[index] = !newOpenDialogs[index];
      setOpenDialogs(newOpenDialogs);
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
                (
                  { selfId, partnerId, imgurl, marriageDate, reveiw, story },
                  index
                ) => (
                  <tr key={name} className="even:bg-blue-gray-50/50">
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal text-md"
                      >
                        {selfId}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {partnerId}
                      </Typography>
                    </td>

                    <td className="p-4">
                      <>
                        <Button
                          onClick={() => handleOpen(index)}
                          variant="gradient"
                        >
                          Open Dialog
                        </Button>
                        <Dialog
                     
                          open={openDialogs[index]}
                          handler={() => handleOpen(index)}
                       
                        >
                          <Card
                            color="transparent"
                            shadow={false}
                            className="w-full p-10"
                          >
                            <CardHeader
                              color="transparent"
                              floated={false}
                              shadow={false}
                              className="mx-0 flex items-center gap-4 pt-0 pb-8"
                            >
                              <Avatar
                                size="lg"
                                variant="circular"
                                src={imgurl}
                              />
                              <div className="flex w-full flex-col gap-0.5">
                                <div className="flex items-center justify-between">
                                  <Typography variant="h5" color="blue-gray">
                                    Marriage on <br />
                                    {marriageDate}
                                  </Typography>
                                  <div className="flex items-center mt-2.5 mb-5">
                                    <Rating readonly value={parseInt(reveiw)} />

                                    <span className="bg-blue-100 text-[#53346D] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-[#53346D] ml-3">
                                      {reveiw}.0
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </CardHeader>
                            <CardBody className="mb-6 p-0">
                              <Typography> {story}</Typography>
                            </CardBody>
                          </Card>
                        </Dialog>
                      </>
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

export default AdminSuccessRoute;