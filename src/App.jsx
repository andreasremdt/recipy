import React from "react";
import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Create from "./pages/Create";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">My recipes</Link>
        <Link to="/recipe/create">Add recipe</Link>
      </nav>

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
