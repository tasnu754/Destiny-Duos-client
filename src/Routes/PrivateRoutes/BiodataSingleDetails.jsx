
const BiodataSingleDetails = ({ biodataDetails, role }) => {
    // console.log(biodataDetails , role);
    return (
      <div className="p-10  border-r-2 bg-yellow-300">
        <div className="w-[80%] mx-auto h-[400px] overflow-hidden rounded-full">
          <img
            className="w-full  h-full object-cover"
            src={biodataDetails.image}
            alt=""
          />
        </div>
        <h2 className="text-2xl font-bold text-yellow-900 text-center py-6">
          {biodataDetails.name}
        </h2>
        <div className="space-y-2 text-xl font-bold  w-[60%] mx-auto ">
          <p>Age : {biodataDetails.age}</p>
          <p>Height : {biodataDetails.height}</p>
          <p>
            Weight : {biodataDetails.weight} : {biodataDetails.age}
          </p>
          <p>Birth Date : {biodataDetails.date_of_birth}</p>
          <p>Occupation : {biodataDetails.occupation}</p>
          <p>Race : {biodataDetails.race}</p>
          <p>Fathers Name : {biodataDetails.fathers_name}</p>
          <p>Mothers Name : {biodataDetails.mothers_name}</p>
          <p>Permanent Divison : {biodataDetails.permanent_division_name}</p>
          <p>Present Divison : {biodataDetails.present_division_name}</p>
          <p>Expected Partner Age : {biodataDetails.expected_partner_age}</p>
          <p>
            Expected Partner Height : {biodataDetails.expected_partner_height}
          </p>
          <p>
            Expected Partner Wight : {biodataDetails.expected_partner_weight}
          </p>
          {role === "Premium" && (
            <div className="text-pink-600">
              <p>Contact Email : {biodataDetails.contact_email}</p>
              <p>Contact Number : {biodataDetails.mobile_number}</p>
            </div>
          )}
        </div>
      </div>
    );
};

export default BiodataSingleDetails;