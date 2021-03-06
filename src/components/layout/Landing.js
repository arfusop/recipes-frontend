import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const Landing = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);

  if (isAuth) {
    return <Redirect to="/dashboard" />;
  }
  return <section className="landing">landing page for now</section>;
};

export default Landing;
