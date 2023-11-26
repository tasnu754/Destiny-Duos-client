import { Avatar, Button, Card, CardBody, CardHeader, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";


const OthersBiodata = ({ other, role, handleFavourite }) => {
  return (
    <div className="shadow-md p-4 ">
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
            src={other?.image}
            alt="tania andrew"
          />
          <div className="flex w-full flex-col gap-0.5">
            <div className="flex items-center justify-between ">
              <Typography
                className="text-yellow-900"
                variant="h5"
                color="blue-gray"
              >
                {other?.name}
              </Typography>
            </div>
            <Typography color="blue-gray">{other?.occupation}</Typography>
          </div>
        </CardHeader>
        <CardBody className="mb-6 p-0 ">
          <Typography>
            <div className="md:flex justify-between">
              <p>Biodata Id: {other?.biodataId}</p>
              <p>{other?.biodatatype}</p>
            </div>
            <div className="md:flex justify-between ">
              <p>Permanent Division: {other?.permanent_division_name}</p>
              <p>{other.race} </p>
            </div>
            <div className="md:flex justify-between">
              <p>Birth Date: {other?.date_of_birth}</p>
              <p>{other.age} years</p>
            </div>
            <div className="md:flex justify-between ">
              <p>Fathers Name: {other?.fathers_name}</p>
            </div>
            <div className="md:flex justify-between ">
              <p>Mothers Name: {other?.mothers_name}</p>
            </div>
            <p>Expected Partner Age : {other?.expected_partner_age}</p>
            <p>Expected Partner Height : {other?.expected_partner_height}</p>
            <p>Expected Partner Weight : {other?.expected_partner_weight}</p>
            {role === "Premium" && (
              <div className="text-pink-600">
                <p>Contact Email : {other?.contact_email}</p>
                <p>Contact Number : {other?.mobile_number}</p>
              </div>
            )}
          </Typography>
          <div className="md:flex justify-between space-y-2 pt-4">
            <Button
              onClick={() => handleFavourite(other)}
              className="btn1 pb-4"
            >
              Add to Favourites
            </Button>
            {role !== "Premium" && (
              <Link to={`/checkOut/${other.biodataId}`}>
                <Button className="btn1 pb-4">Contact</Button>
              </Link>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default OthersBiodata;