import React from 'react';
import { Route, Redirect } from 'react-router-dom'

const userIsAuthenticated = () => {
    return localStorage.getItem('token') !== null;
}

const PrivateRoute = ({component: Component, ...props}) => {
    return (
        <Route
         {...props}
         render={(props) => {
            if (userIsAuthenticated()) {
                return <Component {...props}/>
            }
            return <Redirect to ='/' />
         }}
        />
    )
}

export default PrivateRoute;


/* another example *** - >

import React from 'react';
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
          <Redirect to='/' />
        )
    }
  />
);

export default PrivateRoute;
*/