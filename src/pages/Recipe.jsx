import React, { useEffect } from "react";

function Recipe() {
  useEffect(() => {
    document.title = "Recipe #1";
  }, []);

  return <h1>Recipe #1</h1>;
}

export default Recipe;
