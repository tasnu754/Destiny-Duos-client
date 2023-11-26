


import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { Spinner } from "@material-tailwind/react";
import './checkout.css';
import { createPaymentIntent, saveContactReq } from "../../APIs/requestContact";
import Swal from "sweetalert2";


const CheckoutForm = ({requestedBiodata}) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [cardError, setCardError] = useState("");
    const [clientSecret, setClientSecret] = useState("");
    const [proccessing, setProccessing] = useState(false);

    useEffect(() => {
        createPaymentIntent({ price: 500 })
            .then(data => {
                setClientSecret(data.clientSecret);
            })
    },[requestedBiodata])

    const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();

      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }

      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const card = elements.getElement(CardElement);

      if (card == null) {
        return;
      }

      // Use your card Element with other Stripe.js APIs
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card,
      });

      if (error) {
        setCardError(error)
        console.log("[error]", error);
      } else {
        setCardError("")
        console.log("[PaymentMethod]", paymentMethod);
        }
        
         setProccessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,{
             
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email,
                    name : user?.displayName
                }
            }
        })
        
        if (confirmError) {
            console.log(confirmError);
            setCardError(confirmError.message)
        }

        console.log("payment intent", paymentIntent);
        
        if (paymentIntent.status === "succeeded") {
            
            const paymentInfo = {
              ...requestedBiodata,
              status: "requested",
              transactionId: paymentIntent.id,
              date: new Date(),
            };


            try {
                
                await saveContactReq(paymentInfo);
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Payment successful",
                  showConfirmButton: false,
                  timer: 1500,
                });
            } catch (err) {
                console.log(err);
            } finally {
                setProccessing(false);
            }
            //TODO: update status of biodata

            setProccessing(false);
        }
      

         

    };

   

    return (
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="text-black "
          type="submit"
          disabled={!stripe || !clientSecret || proccessing}
        >
          {proccessing ? <Spinner></Spinner> : "Pay $500"}
        </button>
        {cardError && <p className="text-red-500 my-4">{cardError}</p>}
      </form>
    );
};

export default CheckoutForm;