import React from "react";
import { Route, Redirect } from "react-router-dom";

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  return(
    <Route
      {...rest}
      render={(props) => {
        const isAuth = localStorage.getItem("user-tkn") ? true : false;

        if(isAuth){
            return <Component {...props} />;
        }else{
            return <Redirect to="/" />
        }
      }}
    />
  );
};
