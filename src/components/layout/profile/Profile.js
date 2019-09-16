import React, { useReducer } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Select } from "antd";
import ProfileBody from "../styled/ProfileBody";
import { updateProfileReducer, initialState } from "./reducers";
import { UPDATE_DIETS } from "./types";

const options = [
  "Keto",
  "Paleo",
  "Atkins",
  "Whole30",
  "Vegetarian",
  "Vegan",
  "Gluten Free",
  "Intermittent Fasting"
];

const Profile = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const [profileData, dispatchProfile] = useReducer(
    updateProfileReducer,
    initialState
  );

  const { diets } = profileData;
  const handleDietSelections = value => {
    dispatchProfile({ type: UPDATE_DIETS, payload: value });
  };

  const filteredOptions = options.filter(o => !diets.includes(o));

  if (!isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <ProfileBody>
      <div className="profileTitle">Title & intro</div>
      <div className="profileBody">
        <div>login info/profile pic</div>
        <div className="profileOptionsContainer">
          <div className="profileOptionsTitle">Profile</div>
          <div className="profileOptionsBody">
            <div>
              <span>Diets</span>
              <Select
                mode="multiple"
                placeholder="Diets"
                value={diets}
                onChange={handleDietSelections}
                style={{ width: "100%" }}
              >
                {filteredOptions.map((item, index) => {
                  return (
                    <Select.Option key={index} value={item}>
                      {item}
                    </Select.Option>
                  );
                })}
              </Select>
            </div>
          </div>
        </div>
      </div>
    </ProfileBody>
  );
};

export default Profile;
