import React from 'react';
import { Route,redirect } from 'react-router-dom';


const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <div>hihih</div>
    // <Route
    //   {...rest}
    //   render={(props) =>
    //     isAuthenticated ? (
    //       <Component {...props} />
    //     ) : (
    //       <redirect to="/myAccount" />
    //     )
    //   }
    // />
  );
};

export default PrivateRoute;
