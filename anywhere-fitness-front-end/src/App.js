import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import LoginWFormik from "./components/Login";
import SignUpWFormik from "./components/SignUp";
import ClientDashboard from "./components/dashboard/Client";
import InstructorDashboard from "./components/dashboard/Instructor";
import ClientOverview from "./components/client/ClientOverview";
import InstructorOverview from "./components/instructor/InstructorOverview";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div>
      <Route
        exact
        path="/"
        render={props => {
          return <LoginWFormik {...props} />;
        }}
      />

      <Route
        exact
        path="/register"
        render={props => {
          return <SignUpWFormik {...props} />;
        }}
      />

      <PrivateRoute
        component={ClientDashboard}
        exact
        path="/dashboard/client"
      />

      <PrivateRoute
        component={InstructorDashboard}
        exact
        path="/dashboard/instructor"
      />

      <PrivateRoute
        component={ClientOverview}
        exact
        path="/overview/users"
      />

      <PrivateRoute
        component={InstructorOverview}
        exact
        path="/overview/instructor"
      />
      {/* <ClientLogin />
      <ClientRegistration />
      <InstructorLogin />
      <InstructorRegistration /> */}
    </div>
  );
}

export default App;