import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import { getCurrentProfile } from "../../../store/actions/profileActions";
import DashboardBody from "../styled/DashboardBody";
import DashHeader from "./components/DashHeader";

const Dashboard = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentProfile());
  }, []);

  const isAuth = useSelector(state => state.auth.isAuthenticated);

  if (!isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <DashboardBody className="dashboardBody">
      <DashHeader />
      <div className="recipesContainer">Recipes go here</div>
    </DashboardBody>
  );
};

export default Dashboard;
