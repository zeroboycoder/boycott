import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import "./App.css";
import Layout from "./hoc/Layout";
import Home from "./container/Home/Home";
import ItemsPage from "./container/Items/Items";
import ItemDetail from "./container/ItemDetail/ItemDetail";
import SignUp from "./container/Auth/SignUp/SignUp";
import SignIn from "./container/Auth/SignIn/SignIn";

class App extends Component {
   render() {
      const theme = createMuiTheme({
         palette: {
            primary: {
               main: "#ff5722",
            },
            secondary: {
               main: "#ef8d32",
            },
         },
      });

      return (
         <Layout>
            <ThemeProvider theme={theme}>
               <div className="App">
                  <Switch>
                     <Route path="/signup" component={SignUp} />
                     <Route path="/signin" component={SignIn} />
                     <Route path="/:category/:item" component={ItemDetail} />
                     <Route path="/:category" component={ItemsPage} />
                     <Route path="/" exact component={Home} />
                  </Switch>
               </div>
            </ThemeProvider>
         </Layout>
      );
   }
}

export default App;
