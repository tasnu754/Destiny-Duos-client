
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { updateViews } from "../../APIs/biodatas";
import useAuth from "../../Hooks/useAuth";
import { BsBookmarkStarFill } from "react-icons/bs";

const BiodataSingle = ({ biodata, highestViewsBiodata }) => {
  const { user } = useAuth();

  const handleViews = async () => {
    const userEmail = { userEmail: user?.email };
    const data = await updateViews(biodata._id, userEmail);
    console.log(data);
  };

  return (
    <div className="shadow-md p-4">
      <Card color="transparent" shadow={false} className="w-full max-w-[26rem]">
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-4 pt-0 pb-8"
        >
          <Avatar
            size="lg"
            variant="circular"
            src={biodata.image}
            alt="tania andrew"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between ">
              <Typography
                className="text-yellow-900"
                variant="h5"
                color="blue-gray"
              >
                {biodata?.name}
              </Typography>
              {biodata?._id == highestViewsBiodata?._id && (
                <BsBookmarkStarFill className="text-5xl text-[#532470]"></BsBookmarkStarFill>
              )}
            </div>
            <div className="flex justify-between">
              <Typography color="blue-gray">{biodata?.occupation}</Typography>
              <Typography color="blue-gray">{biodata?.views} Views</Typography>
            </div>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0 ">
          <Typography>
            <div className="flex justify-between">
              <p>Biodata Id: {biodata?.biodataId}</p>
              <p>{biodata?.biodatatype}</p>
            </div>
            <div className="flex justify-between mb-4">
              <p>Permanent Division: {biodata?.permanent_division_name}</p>
              <p>{biodata?.age} years</p>
            </div>
          </Typography>
          <Link to={`/biodataDetails/${biodata?.biodataId}`}>
            <Button onClick={handleViews} className="btn1 ">
              View Profile
            </Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default BiodataSingle;