import React, { useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    document.title = "My recipes";
  }, []);

  return (
    <Fragment>
      <h1>My recipes</h1>

      <Link to="/recipe/123">
        <h2>Recipe #1</h2>
      </Link>
      <Link to="/recipe/123">
        <h2>Recipe #1</h2>
      </Link>
      <Link to="/recipe/123">
        <h2>Recipe #1</h2>
      </Link>
    </Fragment>
  );
}

export default Home;
