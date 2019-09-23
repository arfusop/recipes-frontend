import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { getCurrentProfile } from "../../../store/actions/profileActions";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentProfile());
  }, []);

  const isAuth = useSelector(state => state.auth.isAuthenticated);

  if (!isAuth) {
    return <Redirect to="/" />;
  }

  return <section className="recipes">Recipes page</section>;
};

export default Dashboard;
