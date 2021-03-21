import React, { Component } from "react";
import { Button, Container, TextField } from "@material-ui/core";
import "../Auth.css";

class SignUp extends Component {
   render() {
      return (
         <Container maxWidth="sm">
            <form
               className="Auth__Form"
               onSubmit={() => alert("Submitted Form")}
            >
               <h2 className="Auth__Title">Registration</h2>
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
               <TextField
                  id="c_password"
                  label="Confirm Password"
                  type="password"
                  variant="outlined"
               />
               <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  className="Auth__Btn"
               >
                  Create a account
               </Button>
               <p className="SwitchAuthBtn">
                  Already account?{" "}
                  <span onClick={() => this.props.history.push("/signin")}>
                     Login
                  </span>
               </p>
            </form>
         </Container>
      );
   }
}

export default SignUp;
