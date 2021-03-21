import React, { Component } from "react";
import { Container } from "@material-ui/core";
import "./ItemDetail.css";
import Logo from "../../assets/mytel.png";

class ItemDetail extends Component {
   render() {
      return (
         <Container maxWidth="sm" className="ItemDetail">
            <div className="ItemDetail__Logo">
               <img src={Logo} alt="mytel" />
            </div>
            <div className="ItemDetail__Name">
               <h2>Mytel</h2>
            </div>
            <div className="ItemDetail__Desc">
               <p variant="body1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deleniti ea odio quasi a dignissimos minima expedita, error
                  impedit iste? Quisquam!
               </p>
            </div>
         </Container>
      );
   }
}

export default ItemDetail;
