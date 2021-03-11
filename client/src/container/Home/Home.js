import React, { Component } from "react";
import { Container, Grid } from "@material-ui/core";
import {
   CommuteOutlined,
   FastfoodOutlined,
   FavoriteBorderOutlined,
   EmojiTransportationOutlined,
   LocalDrinkOutlined,
} from "@material-ui/icons";
import "./Home.css";
import CategoryBox from "../../components/CateBox/CateBox";

class Home extends Component {
   goToItemPage = (path) => {
      this.props.history.push(path);
   };

   render() {
      // Products Lists
      const products = [
         {
            name: "Transportation",
            icon: (
               <CommuteOutlined
                  color="secondary"
                  style={{ fontSize: 80, marginBottom: 30 }}
               />
            ),
            path: "/transportation",
         },
         {
            name: "Food, Drink and Utility",
            icon: (
               <FastfoodOutlined
                  color="secondary"
                  style={{ fontSize: 80, marginBottom: 30 }}
               />
            ),
            path: "/food",
         },
         {
            name: "Health Service",
            icon: (
               <FavoriteBorderOutlined
                  color="secondary"
                  style={{ fontSize: 80, marginBottom: 30 }}
               />
            ),
            path: "/health",
         },
         {
            name: "Hotal and Tourism",
            icon: (
               <EmojiTransportationOutlined
                  color="secondary"
                  style={{ fontSize: 80, marginBottom: 30 }}
               />
            ),
            path: "tourism",
         },
         {
            name: "Oils and Other",
            icon: (
               <LocalDrinkOutlined
                  color="secondary"
                  style={{ fontSize: 80, marginBottom: 30 }}
               />
            ),
            path: "oilandother",
         },
      ];

      // Loop the product and create Box
      const Boxs = products.map((product) => (
         <Grid item>
            <CategoryBox
               name={product.name}
               icon={product.icon}
               clicked={() => this.goToItemPage(product.path)}
            />
         </Grid>
      ));

      return (
         <Container maxWidth="md" className="Home">
            <Grid container spacing={8} justify="center">
               {Boxs}
            </Grid>
         </Container>
      );
   }
}

export default Home;
