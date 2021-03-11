import React, { Component } from "react";
import NavBar from "../components/Navigation/Toolbar";

class Layout extends Component {
   render() {
      return (
         <React.Fragment>
            <NavBar />
            {this.props.children} {/* App.js */}
         </React.Fragment>
      );
   }
}

export default Layout;
