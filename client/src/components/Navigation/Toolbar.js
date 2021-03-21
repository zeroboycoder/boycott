import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Toolbar.css";
import { Container, Grid, Typography } from "@material-ui/core";

class Toolbar extends Component {
   render() {
      return (
         <nav className="Toolbar">
            <Container maxWidth="lg">
               <Grid container justify="space-between" alignItems="center">
                  <Grid item>
                     <Typography variant="h1" className="Toolbar__Brand">
                        <span onClick={() => this.props.history.push("/")}>
                           Boycott
                        </span>
                     </Typography>
                  </Grid>
                  <Grid item className="Toolbar__Auth">
                     <button onClick={() => this.props.history.push("/signup")}>
                        Signup
                     </button>
                     <button onClick={() => this.props.history.push("/signin")}>
                        Signin
                     </button>
                  </Grid>
               </Grid>
            </Container>
         </nav>
      );
   }
}

export default withRouter(Toolbar);
