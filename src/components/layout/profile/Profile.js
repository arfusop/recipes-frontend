import React, { useReducer } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { DatePicker, InputNumber, Select } from "antd";
import ProfileBody from "../styled/ProfileBody";
import ProfileImage from "./components/ProfileImage";
import { updateProfileReducer, initialState } from "./reducers";
import {
  UPDATE_DIETS,
  UPDATE_DOB,
  UPDATE_ALLERGIES,
  UPDATE_SKILL,
  UPDATE_GENDER,
  UPDATE_PROFILE_IMG
} from "./types";
import { dietOptions, allergieOptions, skills } from "./utils/profile_options";

const Profile = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const [profileData, dispatchProfile] = useReducer(
    updateProfileReducer,
    initialState
  );

  const allAllergies = allergieOptions.sort();
  const allDiets = dietOptions.sort();

  const {
    allergies,
    cookingSkill,
    diets,
    houseHoldSize,
    gender,
    profilePic
  } = profileData;
  const handleDietSelections = value => {
    dispatchProfile({ type: UPDATE_DIETS, payload: value });
  };

  const handleAllergiesSelections = value => {
    dispatchProfile({ type: UPDATE_ALLERGIES, payload: value });
  };

  const handleDOBSelection = value => {
    dispatchProfile({ type: UPDATE_DOB, payload: value._d });
  };

  const handleSkillSelection = value => {
    dispatchProfile({ type: UPDATE_SKILL, payload: value });
  };

  const handleGenderSelection = value => {
    dispatchProfile({ type: UPDATE_GENDER, payload: value });
  };

  const filteredDiets = allDiets.filter(o => !diets.includes(o));
  const filteredAllergies = allAllergies.filter(a => !allergies.includes(a));

  const onImgUpload = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "MainCourse");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/ddtlpiqwj/image/upload",
      {
        method: "POST",
        body: data
      }
    );

    const file = await res.json();
    dispatchProfile({
      action: UPDATE_PROFILE_IMG,
      payload: { small: file.secure_url, large: file.eager[0].secure_url }
    });
  };
  console.log(profilePic);

  if (!isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <ProfileBody>
      <div className="profileTitle">Title & intro</div>
      <div className="profileBody">
        <div>
          <div>Login info</div>
          <div>
            <ProfileImage pic={profilePic} onImgUpload={onImgUpload} />
          </div>
        </div>
        <div className="profileOptionsContainer">
          <div className="profileOptionsTitle">Profile</div>
          <div className="profileOptionsBody">
            <div>
              <span>DOB</span>
              <DatePicker
                // value={dob}
                onChange={handleDOBSelection}
                size="medium"
              />
            </div>
            <div>
              <span>Diets</span>
              <Select
                showArrow
                mode="multiple"
                placeholder="Diets"
                value={diets}
                onChange={handleDietSelections}
                style={{ width: "100%" }}
              >
                {filteredDiets.map((item, index) => {
                  return (
                    <Select.Option key={index} value={item}>
                      {item}
                    </Select.Option>
                  );
                })}
              </Select>
            </div>
            <div>
              <span>Allergies</span>
              <Select
                showArrow
                mode="multiple"
                value={allergies}
                onChange={handleAllergiesSelections}
                placeholder="Allergies"
                style={{ width: "100%" }}
              >
                {filteredAllergies.map((item, index) => {
                  return (
                    <Select.Option key={index} value={item}>
                      {item}
                    </Select.Option>
                  );
                })}
              </Select>
            </div>
            <div>
              <span>Skill Level</span>
              <Select
                // mode="multiple"
                showSearch
                value={cookingSkill.length > 0 ? cookingSkill : undefined}
                onChange={handleSkillSelection}
                placeholder="Skill Level"
                style={{ width: "100%" }}
              >
                {skills.map((item, index) => {
                  return (
                    <Select.Option key={index} value={item}>
                      {item}
                    </Select.Option>
                  );
                })}
              </Select>
            </div>
            <div>
              <span>Household Size</span>
              <InputNumber min={1} max={10} defaultValue={1} />
            </div>
            <div>
              <span>Gender</span>
              <Select
                // mode="multiple"
                showSearch
                placeholder="Gender"
                value={gender ? gender : undefined}
                onChange={handleGenderSelection}
                style={{ width: "100%" }}
              >
                {["Male", "Female", "Other"].map((item, index) => {
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
