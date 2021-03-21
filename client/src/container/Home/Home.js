import React, { Component } from "react";
import { Container, Grid } from "@material-ui/core";
import {
   CommuteOutlined,
   FastfoodOutlined,
   LocalGroceryStoreOutlined,
   FavoriteBorderOutlined,
   EmojiTransportationOutlined,
   LocalDrinkOutlined,
} from "@material-ui/icons";
import "./Home.css";
import CategoryBox from "../../components/CateBox_home/CateBox";

class Home extends Component {
   goToItemPage = (path) => {
      this.props.history.push(path);
   };

   render() {
      // Products Lists
      const products = [
         {
            name: "Transportation & Communication",
            icon: (
               <CommuteOutlined
                  color="secondary"
                  style={{ fontSize: 80, marginBottom: 30 }}
               />
            ),
            path: "/transportation_&_communication",
         },
         {
            name: "Food & Beverage",
            icon: (
               <FastfoodOutlined
                  color="secondary"
                  style={{ fontSize: 80, marginBottom: 30 }}
               />
            ),
            path: "/food_&_beverage",
         },
         {
            name: "Grocery Accessories",
            icon: (
               <LocalGroceryStoreOutlined
                  color="secondary"
                  style={{ fontSize: 80, marginBottom: 30 }}
               />
            ),
            path: "/grocery_accessories",
         },
         {
            name: "Health Care Service",
            icon: (
               <FavoriteBorderOutlined
                  color="secondary"
                  style={{ fontSize: 80, marginBottom: 30 }}
               />
            ),
            path: "/health_care_service",
         },
         {
            name: "Hotel and Tourism",
            icon: (
               <EmojiTransportationOutlined
                  color="secondary"
                  style={{ fontSize: 80, marginBottom: 30 }}
               />
            ),
            path: "hotel_&_tourism",
         },
         {
            name: "Petrol, Oil & Others",
            icon: (
               <LocalDrinkOutlined
                  color="secondary"
                  style={{ fontSize: 80, marginBottom: 30 }}
               />
            ),
            path: "petrol,_oil_&_others",
         },
      ];

      // Loop the product and create Box
      const Boxs = products.map((product) => (
         <Grid item key={product.name}>
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
