
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const BiodataSingle = ({biodata}) => {
    return (
      <div className="shadow-md p-4">
        <Card
          color="transparent"
          shadow={false}
          className="w-full max-w-[26rem]"
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
                  {biodata.name}
                </Typography>
              </div>
              <Typography color="blue-gray">{biodata.occupation}</Typography>
            </div>
          </CardHeader>
          <CardBody className="mb-6 p-0 ">
            <Typography>
              <div className="flex justify-between">
                <p>Biodata Id: {biodata.biodataId}</p>
                <p>{biodata.biodatatype}</p>
              </div>
              <div className="flex justify-between mb-4">
                <p>Permanent Division: {biodata.permanent_division_name}</p>
                <p>{biodata.age} years</p>
              </div>
            </Typography>
            <Link to={`/biodataDetails/${biodata.biodataId}`}>
              <Button className="btn1 ">View Profile</Button>
            </Link>
          </CardBody>
        </Card>
      </div>
    );
};

export default BiodataSingle;