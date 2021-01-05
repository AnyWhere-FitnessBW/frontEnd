import React from "react";
import { Button, Jumbotron } from "reactstrap";
import { Link } from "react-router-dom";

export default props => {
  return (
    <Jumbotron className="mt-5">
      <h3>Welcome to Anywhere Fitness</h3>

      <h5>As a user, you can..</h5>
      <ul>
        <li>Register for a class by clicking the sign-up button</li>
        <li>
          Unregister for a class by clicking the cancel reservation button in my
          classes tab
        </li>
      </ul>

      <Link to="/dashboard/client">
        <Button color="danger" size="lg">Close</Button>
      </Link>
    </Jumbotron>
  );
};
