import React from "react";
import { Button, Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";

export default props => {
  return (
    <Jumbotron className="mt-5">
      <h3>Welcome to Anywhere Fitness</h3>

      <h5>As an Instructor, you can...</h5>
      <ul>
        <li>Create a class by clicking on the "Add Class" button</li>
        <li>Delete your created classes by clicking the "Delete" button</li>
      </ul>

      <Link to="/dashboard/instructor">
        <Button color="danger" size="lg">Close</Button>
      </Link>
    </Jumbotron>
  );
};
