import React, { useEffect, Fragment } from "react";

function Create() {
  useEffect(() => {
    document.title = "Create a new recipe";
  }, []);

  return (
    <Fragment>
      <h1>Create a new recipe</h1>

      <form action="#" method="POST">
        <label htmlFor="name">Name:</label>
        <input name="name" />

        <button type="submit">Submit</button>
      </form>
    </Fragment>
  );
}

export default Create;
