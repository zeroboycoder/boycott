import React, { Component } from "react";
import "./Items.css";
import { Container, Grid } from "@material-ui/core";
import CategoryBox from "../../components/CategoryBox/CategoryBox";
import ItemBox from "../../components/ItemBox/ItemBox";

class Items extends Component {
   state = {
      categoryName: "",
      categories: [
         {
            name: "Transportation & Communication",
            path: "/transportation_&_communication",
         },
         {
            name: "Food & Beverage",
            path: "/food_&_beverage",
         },
         {
            name: "Grocery Accessories",
            path: "/grocery_accessories",
         },
         {
            name: "Health Care Service",
            path: "/health_care_service",
         },
         {
            name: "Hotel & Tourism",
            path: "hotel_&_tourism",
         },
         {
            name: "Petrol, Oil & Others",
            path: "petrol,_oil_&_others",
         },
      ],
   };

   componentDidMount() {
      const cateName = this.props.match.params.category.split("_").join(" ");
      this.setState({ categoryName: cateName });
   }

   componentDidUpdate(preProps, preState) {
      if (preProps.match.params.category !== this.props.match.params.category) {
         const cateName = this.props.match.params.category.split("_").join(" ");
         this.setState({ categoryName: cateName });
      }
   }

   render() {
      // Configure the Category Box
      const cateName = this.props.match.params.category.split("_").join(" ");
      const configCateBox = this.state.categories.map((category) => {
         return (
            <CategoryBox
               key={category.name}
               active={category.name.toLowerCase() === cateName}
               name={category.name}
               path={category.path}
            />
         );
      });

      // Configure the Item Box
      const itemBox = <ItemBox params={this.props.match.params.category} />;

      // Create the Category boxes And Item Boxes
      const cateAndItem = (
         <Grid container>
            <Grid item md={4}>
               <div className="Items__CateBox">{configCateBox}</div>
            </Grid>
            <Grid item xs md={8}>
               {itemBox}
               {itemBox}
               {itemBox}
               {itemBox}
               {itemBox}
               {itemBox}
               {itemBox}
               {itemBox}
               {itemBox}
            </Grid>
         </Grid>
      );

      return (
         <Container className="Items">
            {/* Category Title */}
            <h2 className="Items__CateTitle">{this.state.categoryName}</h2>

            {cateAndItem}
         </Container>
      );
   }
}

export default Items;
