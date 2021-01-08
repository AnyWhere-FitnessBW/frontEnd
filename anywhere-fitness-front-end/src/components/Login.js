import React from "react";
import { Button } from "reactstrap";
import { withFormik, Form, Field } from "formik";
import axios from "axios";
import AFLogoFxn from "./AFLogo";
import Navigation from "./Header";

const baseUrl = "https://anywhere-fitnessbuild2.herokuapp.com";

function Login(props) {
  return (
    <div>
      <Navigation login={true} signUp={true} logout={true}/>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <AFLogoFxn />
        <div className="SignUp-Container">
          <Form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <Field
                className="form-control"
                type="text"
                name="username"
                id="username"
                placeholder="jdoe"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <Field
                className="form-control"
                type="password"
                name="password"
                id="password"
                placeholder="password"
              />
            </div>
            <div className="form-group">
              {/* <label htmlFor="instructorCode">instructorCode:</label>
                    <Field className="form-control" type="instructorCode" name="instructorCode" id="instructorCode" placeholder="(Instructors Only)" /> */}
            </div>
            <div className="text-right">
              <Button type="submit" class="dark">
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

const LoginWFormik = withFormik({
  mapPropsToValues() {
    return {
      username: "",
      password: ""
    };
  },

  handleSubmit(values, tools) {
    const payload = {
      username: values.username,
      password: values.password
    };

    axios
      .post(baseUrl + "/api/auth/login", payload)
      .then(response => {
        localStorage.setItem("token", response.data.token);
        // const landingUrl =
        //   response.data.user.role === "client"
        //     ? "/dashboard/client"
        //     : "/dashboard/instructor";
        // tools.props.history.push(landingUrl);
        setTimeout(() => {tools.props.history.push('/dashboard/client')}, 1500)
        alert(response.data.message);
      })
      .catch(error => {
        alert(error);
      });
  }
})(Login);

export default LoginWFormik;
