import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container } from '@material-ui/core';
import Product from './Product';
import products from '../data/product-data';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Products() {
    const classes = useStyles();

    return (
      <div className={classes.root}>
        <Container>
          <Grid container spacing={3}>
            {products.map((product) => {
              return (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Product key={products.id} product={product} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    );
}
