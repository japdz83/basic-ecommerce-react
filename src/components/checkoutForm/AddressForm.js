import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { Grid, Typography, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import useStyles from "./style";
import AddressInput from "./AddressInput";
import { useStateValue } from "../../StateProvider";
import { actionTypes } from "../../reducer";

const AddressForm = ({ nextStep }) => {
  const classes = useStyles();

  const methods = useForm();

  const [{ shippingData }, dispatch] = useStateValue();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => {
            dispatch({
              type: actionTypes.SET_SHIPPINGDATA,
              shippingData: data,
            });
            nextStep();
          })}
        >
          <Grid container spacing={3}>
            <AddressInput required name="firstName" label="First Name" />
            <AddressInput required name="lastName" label="Last Name" />
            <AddressInput required name="address1" label="Address" />
            <AddressInput required name="email" label="Email Address" />
            <AddressInput required name="city" label="City" />
            <AddressInput required name="postCode" label="Post Code" />
          </Grid>
          <div className={classes.buttons}>
            <Link to="checkout-page">
              <Button className={classes.button}>Back</Button>
            </Link>
            <Button
              className={classes.button}
              type="submit"
              value=""
              variant="contained"
              color="primary"
            >
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;
