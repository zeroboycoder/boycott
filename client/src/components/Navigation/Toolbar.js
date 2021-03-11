import React, { Component } from "react";
import "./Toolbar.css";
import { Container, Typography } from "@material-ui/core";

class Toolbar extends Component {
   render() {
      return (
         <nav className="Toolbar">
            <Container maxWidth="lg">
               <Typography variant="h1" className="Toolbar__Brand">
                  Boycott
               </Typography>
            </Container>
         </nav>
      );
   }
}

export default Toolbar;
