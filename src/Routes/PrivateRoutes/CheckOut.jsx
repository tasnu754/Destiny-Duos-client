import { useLoaderData } from "react-router-dom";
import Container from "../../Components/Shared/Container/Container";
import useAuth from "../../Hooks/useAuth";

import { getUserBiodata } from "../../APIs/biodatas";
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
loadStripe

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);


const CheckOut = () => {
    const [userBiodata, setUserBiodata] = useState({});
    const { user } = useAuth();
    const { biodata } = useLoaderData();
  

    useEffect(() => {
        getUserBiodata(user.email)
        .then(data=>setUserBiodata(data))
     },[user.email])

  const requestedBiodata = {
    ...biodata,
    RequesterEmail: user.email,
    RequesterName: user.displayName,
    RequesterImg: user.photoURL
  };


    return (
      <Container>
        <div className="border-2 border-yellow-700 lg:h-[60vh] md:w-[60%] mx-auto rounded-lg p-4 lg:mt-14">
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
            <Elements stripe={stripePromise}>
              <CheckoutForm requestedBiodata={requestedBiodata}></CheckoutForm>
            </Elements>
          </div>
        </div>
      </Container>
    );
};

export default CheckOut;