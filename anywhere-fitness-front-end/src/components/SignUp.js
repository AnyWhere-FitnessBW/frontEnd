import React from "react";
import { Button, Toast, ToastBody, ToastHeader } from "reactstrap";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import AFLogoFxn from "./AFLogo";
import Navigation from "./Header";

const baseUrl = "https://anywhere-fitnessbuild2.herokuapp.com/";

function SignUp(props) {
  return (
    <div>
      <Navigation login={true} signUp={true} logout={true} />
      <div className="d-flex flex-column justify-content-center align-items-center">
        <AFLogoFxn />
        <div className="SignUp-Container">
          <Form>
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <Field
                className="form-control"
                type="text"
                name="firstName"
                id="firstName"
                placeholder="firstName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name:</label>
              <Field
                className="form-control"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="lastName"
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Please create a Username:</label>
              <Field
                className="form-control"
                type="text"
                name="username"
                id="username"
                placeholder="jdoe"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Please set a Password:</label>
              <Field
                className="form-control"
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <Field
                className="form-control"
                type="email"
                name="email"
                id="email"
                placeholder="JohnDoe@gmail.com"
              />
            </div>
            
            {/* <div className="form-group">
              <label htmlFor="authCode">InstructorCode:</label>
              <Field
                type="number"
                name="authCode"
                id="authCode"
                placeholder="(Instructors Only)"
                className="form-control"
              />
            </div> */}
            <div className="text-right">
              <Button type="submit" className="btn" variant="dark">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

const SignUpWFormik = withFormik({
  mapPropsToValues() {
    return {
      firstName: "",
      lastname: "",
      username: "",
      email: "",
      password: "",
      // authCode: ""
    };
  },

  handleSubmit(values, tools) {
    const payload = {
      firstName: values.firstName,
      lastname: values.lastname,
      username: values.username,
      email: values.email,
      password: values.password,
      // role: values.authCode === 777 ? "instructor" : "user"
    };

    const landingUrl =
      payload.role === "users" ? "/overview/users" : "overview/instructor";

    axios
      .post(baseUrl + "/api/auth/register", payload)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        tools.props.history.push(landingUrl);
        alert(response.data.message);
      })
      .catch(error => {
        alert(error);
      });
  }
})(SignUp);

export default SignUpWFormik;
