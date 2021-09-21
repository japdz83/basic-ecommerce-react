import React from "react";
import { Divider, Typography, Button } from "@material-ui/core";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import useStyles from "./style";
import Review from "./Review";
import { Link } from "react-router-dom";
import accounting from "accounting";
import { getBasketTotal } from "../../reducer";
import { useStateValue } from "../../StateProvider";
import axios from "axios";

const stripePromise = loadStripe(
  "pk_test_51JauaJDQa02VS0Iid8YX4qze4uU0odF5PneYHn8TgryhTTA27N9skpgsu346v2i2Franrk0jWflK96I4mehg2nzC00x0xt78Un"
);

const CheckoutForm = ({ nextStep, backStep }) => {
  const [{ basket }, dispatch] = useStateValue();

  const classes = useStyles();

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      const { id } = paymentMethod;
      try {
        const { data } = await axios.post(
          "http://localhost:3001/api/checkout",
          {
            id: id,
            amount: getBasketTotal(basket) * 100,
          }
        );
        console.log(data);
        // console.log(response.headers);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          iconStyle: "solid",
          style: {
            base: {
              iconColor: "#9e2146",
              fontSize: "18px",
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "1rem",
        }}
      >
        <Link to="checkout-page">
          <Button
            variant="outlined"
            className={classes.button}
            onClick={backStep}
          >
            Back
          </Button>
        </Link>
        <Button
          className={classes.button}
          type="submit"
          value=""
          variant="contained"
          color="primary"
          disabled={false}
        >
          Pay {accounting.formatMoney(getBasketTotal(basket), "$")}
        </Button>
      </div>
    </form>
  );
};

const PaymentForm = ({ nextStep, backStep }) => {
  return (
    <>
      <Review />
      <Divider />
      <Typography variant="h6" gutterBotton style={{ margin: "20px 0px" }}>
        Payment Method
      </Typography>
      <Elements stripe={stripePromise}>
        <CheckoutForm backStep={backStep} nextStep={nextStep} />
      </Elements>
    </>
  );
};

export default PaymentForm;
