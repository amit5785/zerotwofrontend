import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
const PrivateRoute = (props) =>{

  const { user } = useAuth();
  if(props.private===true)
  {
    if (!user){
      return <Navigate to='/login' />;
    }
  
    return props.children;
  }

  if (!user){
    return props.children;
  }

  return <Navigate to='/dashboard' />;
};

export default PrivateRoute;

