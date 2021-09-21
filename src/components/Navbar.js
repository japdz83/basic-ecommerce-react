import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import { IconButton } from "@material-ui/core";
import { AccountCircle, ShoppingCart } from "@material-ui/icons";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";
import { actionTypes } from "../reducer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  navColor: {
    backgroundColor: "#01579b",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textDecoration: "none",
    color: "#fff",
    "&:hover": {
      cursor: "pointer",
      textDecoration: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  userName: {
    marginRight: "16px`",
  },
  userIcon: {
    marginLeft: "16px`",
  },
  btnShopping: {
    textDecoration: "none",
    color: "#ffffff",
  },
  btnSignin: {
    textDecoration: "none",
    color: "#fff",
    border: "solid 1px #fff",
    margin: "0px 15px",
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const handleOut = () => {
    if (user) {
      auth.signOut();
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        basket: [],
      });
      dispatch({
        type: actionTypes.SET_USER,
        user: null,
      });
      history.push("/");
    }
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.navColor}>
        <Toolbar>
          <Link to="/">
            <Typography variant="h6" className={classes.title}>
              E-commerce React
            </Typography>
          </Link>
          <div className={classes.grow}></div>
          <Typography className="userName">
            Hello {user ? user.email : "User"}
          </Typography>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <AccountCircle className={classes.userIcon} />
          </IconButton>
          <Link to="signin">
            <Button className={classes.btnSignin} onClick={handleOut}>
              {user ? "Sign Out" : "Sing In"}
            </Button>
          </Link>
          <Link to="checkout-page">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <Badge badgeContent={basket?.length} color="secondary">
                <ShoppingCart className={classes.btnShopping} />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
