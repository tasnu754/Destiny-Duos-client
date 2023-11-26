import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const BiodataSingleDetails = ({ biodataDetails, role, handleFavourite }) => {
  
  return (
    <div className="p-10  border-r-2 bg-yellow-300 h-full">
      <div className="h-52 w-52 lg:w-[80%] mx-auto lg:h-[400px] overflow-hidden rounded-full">
        <img
          className="w-full  h-full object-cover"
          src={biodataDetails?.image}
          alt=""
        />
      </div>
      <h2 className="md:text-2xl font-bold text-yellow-900 text-center py-6">
        {biodataDetails?.name}
      </h2>
      <div className="space-y-2 md:text-xl font-bold  lg:w-[70%] mx-auto ">
        <p>Biodata Id : {biodataDetails?.biodataId}</p>
        <p>Age : {biodataDetails?.age}</p>
        <p>Height : {biodataDetails?.height}</p>
        <p>Weight : {biodataDetails?.weight}</p>
        <p>Birth Date : {biodataDetails?.date_of_birth}</p>
        <p>Occupation : {biodataDetails?.occupation}</p>
        <p>Race : {biodataDetails?.race}</p>
        <p>Fathers Name : {biodataDetails?.fathers_name}</p>
        <p>Mothers Name : {biodataDetails?.mothers_name}</p>
        <p>Permanent Divison : {biodataDetails?.permanent_division_name}</p>
        <p>Present Divison : {biodataDetails?.present_division_name}</p>
        <p>Expected Partner Age : {biodataDetails?.expected_partner_age}</p>
        <p>
          Expected Partner Height : {biodataDetails?.expected_partner_height}
        </p>
        <p>
          Expected Partner Wight : {biodataDetails?.expected_partner_weight}
        </p>
        {role === "Premium" && (
          <div className="text-pink-600">
            <p>Contact Email : {biodataDetails?.contact_email}</p>
            <p>Contact Number : {biodataDetails?.mobile_number}</p>
          </div>
        )}
        <div className="md:flex justify-between space-y-2 pt-4">
          <Button
            onClick={() => handleFavourite(biodataDetails)}
            className="btn1 pb-4"
          >
            Add to Favourites
          </Button>
          {role !== "Premium" && (
            <Link to={`/checkOut/${biodataDetails.biodataId}`}>
              <Button className="btn1  pb-4">Contact</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default BiodataSingleDetails;