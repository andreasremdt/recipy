import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Recipe from "./pages/Recipe";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/recipe/create">
          <Create />
        </Route>
        <Route path="/recipe/:id">
          <Recipe />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
