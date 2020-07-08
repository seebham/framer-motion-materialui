import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/home";
import About from "./pages/about";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="*" component={() => <h1>404</h1>} />
      </Switch>
    </Router>
  );
}
