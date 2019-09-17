import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  if (!isAuth) {
    return <Redirect to="/" />;
  }

  return <section className="recipes">Recipes page</section>;
};

export default Dashboard;
