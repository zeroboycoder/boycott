import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Toolbar.css";
import { Container, Typography } from "@material-ui/core";

class Toolbar extends Component {
   render() {
      return (
         <nav className="Toolbar">
            <Container maxWidth="lg">
               <Typography variant="h1" className="Toolbar__Brand">
                  <span onClick={() => this.props.history.push("/")}>
                     Boycott
                  </span>
               </Typography>
            </Container>
         </nav>
      );
   }
}

export default withRouter(Toolbar);
