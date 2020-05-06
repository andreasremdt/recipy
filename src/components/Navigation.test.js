import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./Navigation";

test("renders the <Navigation /> component", () => {
  var { getByText } = render(
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  );

  var logo = getByText(/recipy/i);
  var myRecipes = getByText(/my recipes/i);
  var addRecipe = getByText(/add recipe/i);

  expect(logo).toBeInTheDocument();
  expect(logo).toHaveAttribute("href", "/");
  expect(myRecipes).toBeInTheDocument();
  expect(myRecipes).toHaveAttribute("href", "/");
  expect(addRecipe).toBeInTheDocument();
  expect(addRecipe).toHaveAttribute("href", "/recipe/create");
});
