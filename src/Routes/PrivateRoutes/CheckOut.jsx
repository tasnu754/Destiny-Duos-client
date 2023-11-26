import { useLoaderData } from "react-router-dom";
import Container from "../../Components/Shared/Container/Container";
import useAuth from "../../Hooks/useAuth";

import { getUserBiodata } from "../../APIs/biodatas";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";


const CheckOut = () => {
    const [userBiodata, setUserBiodata] = useState({});
    const { user } = useAuth();
    const { biodata } = useLoaderData();
  

    useEffect(() => {
        getUserBiodata(user.email)
        .then(data=>setUserBiodata(data))
     },[user.email])



    return (
      <Container>
        <div className="border-2 border-yellow-700 md:h-[50vh] md:w-[60%] mx-auto rounded-lg p-4 lg:mt-24">
          <h2 className="text-center text-3xl font-bold py-10">
            Checkout For Contact
          </h2>
          <div className="text-center text-xl">
            <p className="text-yellow-900 font-bold">
              {" "}
              <span>Biodata Id </span>: {biodata.biodataId}
            </p>
            <p className="text-yellow-900 font-bold">
              Your Biodata Id: {userBiodata.biodataId}
            </p>
            <p className="text-yellow-900 font-bold">
              Your Email: {user.email}
            </p>

            {/* Stripe card */}

            <div className="w-full flex justify-center py-4">
              <Button className="btn1 lg:text-lg lg:w-[30%] mx-auto">Submit</Button>
            </div>
          </div>
        </div>
      </Container>
    );
};

export default CheckOut;