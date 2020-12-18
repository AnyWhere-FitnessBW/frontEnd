import React from 'react';
import './App.css';
import {connect} from 'react-redux'
import { Route } from 'react-router-dom';

import Navigation from "./components/Navigation";
import PrivateRoute from './components/PrivateRoute';

import ClientLogin from './components/ClientLogin';
import ClientRegistration from './components/ClientRegistration';
import ClientDashboard from './components/ClientDashboard';

import InstructorLogin from './components/InstructorLogin';
import InstructorRegistration from './components/InstructorRegistration';
import InstructorDashboard from './components/InstructorDashboard';

import {loginInstructor} from './actions'

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Anywhere Fitness</h1>
        <p>Making Lasting Fitness Easy!</p>
      </header>
      <Navigation />
{/* DISPLAY ERROR IF PreSENT */}
      { props.error !== '' ? <p>There was an error: {props.error.message}</p> : null }
      { props.isLoading === true ? <h2>Loading...</h2> : null }

{/* DINER ROUTES */}
      <Route  path="/register-client" component={ClientRegistration} />
      <Route  path="/login-client" component={ClientLogin} />
      <PrivateRoute path="/dashboard-client" component={ClientDashboard} />
{/* OPERATOR ROUTES */}
      <Route  path="/register-instructor" component={InstructorRegistration} />
      <Route  path="/login-instructor" render={() => <InstructorLogin loginInstructor={props.loginInstructor} />} />
      <PrivateRoute path="/dashboard-instructor" component={InstructorDashboard} />

    </div> 
  );
}

const mapStateToProps = state => {
  return {
    instructorData: state.instructor.instructorData,
    allInstructors: state.instructor.allInstructors,
    isLoading: state.client.isLoading,
    error: state.client.error,
  };
};


export default connect(mapStateToProps,{loginInstructor})(App);