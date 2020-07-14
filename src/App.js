import React from "react";
import "./styles.css";
import { BrowserRouter as Router } from "react-router-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

//Custom Wrappers
import { AniRoutes, TransitRoutes } from "./components/route-animations";

//Pages
import Home from "./pages/home";
import About from "./pages/about";
import Cards from "./pages/cards";

const theme = createMuiTheme();

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router>
        <AniRoutes exitBeforeEnter initial={false}>
          <TransitRoutes exact path="/">
            <Home />
          </TransitRoutes>
          <TransitRoutes path="/about">
            <About />
          </TransitRoutes>
          <TransitRoutes path="/cards">
            <Cards />
          </TransitRoutes>
          <TransitRoutes path="*">
            <h1>404</h1>
          </TransitRoutes>
        </AniRoutes>
      </Router>
    </MuiThemeProvider>
  );
}
