import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Layout from "./hoc/Layout";
import Home from "./container/Home/Home";
import ItemsPage from "./container/Items/Items";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";

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
