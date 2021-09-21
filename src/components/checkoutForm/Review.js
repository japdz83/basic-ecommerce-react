import React from "react";
import accounting from "accounting";
import { List, ListItem, ListItemText, Typography } from "@material-ui/core";
import { getBasketTotal } from "../../reducer";
import { useStateValue } from "../../StateProvider";

const Review = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
        {basket.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={product.name} secondary={`Qty : ${1}`} />
            <Typography variant="body2">{product.price} </Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {accounting.formatMoney(getBasketTotal(basket), "$")}
          </Typography>
        </ListItem>
      </List>
    </>
  );
};

export default Review;
