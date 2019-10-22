import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { useSpring, animated } from "react-spring";

// import { getCurrentProfile } from "../../../store/actions/profileActions";
import DashboardBody from "../styled/DashboardBody";
import DashHeader from "./components/DashHeader";
import RecipeCard from "./components/RecipeCard";

const Dashboard = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  if (!isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <DashboardBody className="dashboardBody">
      <DashHeader />

      <animated.div className="recipesContainer" style={props}>
        {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((recipe, i) => (
          <RecipeCard />
        ))}
      </animated.div>
    </DashboardBody>
  );
};

export default Dashboard;
