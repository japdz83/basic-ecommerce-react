import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from '@material-ui/core/CardActions';
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import accounting from "accounting";
import { Link } from "react-router-dom";
import { getBasketTotal } from "../reducer";
import { useStateValue } from "../StateProvider";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    padding: "5px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: "30px",
    fontWeight: "600",
  },
  pos: {
    marginBottom: 12,
  },
  subTotal: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 80,
  },
  delivery: {
    display: "flex",
    justifyContent: "space-between",
  },
  itemCompra: {
    display: "flex",
    justifyContent: "space-between",
  },
  btnTotal1: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#0d47a1",
    color: "#ffffff",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#0091ea",
    },
  },
  btnTotal2: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#2962ff",
    color: "#ffffff",
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#01579b",
    },
  },
  realTotal: {
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "600",
  },
});

const Total = () => {
  const classes = useStyles();

  const [{ basket }, dispatch] = useStateValue();
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          SUMMARY
        </Typography>
        <div className={classes.itemCompra}>
          <Typography variant="h6" component="h6">
            Total Item
          </Typography>
          <Typography variant="body2" component="p">
            {basket?.length}
          </Typography>
        </div>
        <div className={classes.delivery}>
          <Typography variant="h6" component="h6">
            Estimated Delivery
          </Typography>
          <Typography variant="body2" component="p">
            --
          </Typography>
        </div>
        <div className={classes.subTotal}>
          <Typography variant="h5" component="h3">
            SubTotal
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {accounting.formatMoney(getBasketTotal(basket), "$")}
          </Typography>
        </div>
        <div className={classes.realTotal}>
          <Typography variant="h5" component="h3">
            Total =
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {accounting.formatMoney(getBasketTotal(basket), "$")}
          </Typography>
        </div>
      </CardContent>
      <Link to="checkout">
        <Button className={classes.btnTotal1} size="large">
          Checkout Order
        </Button>
      </Link>

      <Button className={classes.btnTotal2} size="large">
        {" "}
        Paypal{" "}
      </Button>
    </Card>
  );
};

export default Total;
