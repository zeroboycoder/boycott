import React, { Component } from "react";
import { Button, Container, TextField } from "@material-ui/core";
import "../Auth.css";

class SignIn extends Component {
   render() {
      return (
         <Container maxWidth="sm">
            <form
               className="Auth__Form"
               onSubmit={() => alert("Submitted Form")}
            >
               <h2 className="Auth__Title">Welcome back</h2>
               <TextField
                  id="email"
                  label="Email"
                  type="email"
                  variant="outlined"
               />
               <TextField
                  id="password"
                  label="Password"
                  type="password"
                  variant="outlined"
               />
               <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  className="Auth__Btn"
               >
                  Login
               </Button>
               <p className="SwitchAuthBtn">
                  You are newbie?{" "}
                  <span onClick={() => this.props.history.push("/signup")}>
                     Create a account
                  </span>
               </p>
            </form>
         </Container>
      );
   }
}

export default SignIn;
