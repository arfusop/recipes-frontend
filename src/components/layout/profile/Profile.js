import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button, DatePicker, InputNumber, Select } from "antd";
import ProfileBody from "../styled/ProfileBody";
import ProfileImage from "./components/ProfileImage";
import LoginInfo from "./components/LoginInfo";
import { dietOptions, allergieOptions, skills } from "./utils/profile_options";
import {
  UPDATE_DIETS,
  UPDATE_DOB,
  UPDATE_ALLERGIES,
  UPDATE_SKILL,
  UPDATE_GENDER,
  UPDATE_PROFILE_IMG,
  UPDATE_HOUSEHOLD
} from "./types";
import { useProfile } from "./utils/useProfile";

const Profile = () => {
  const { profileState, setProfileData } = useProfile();
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  const user = useSelector(state => state.auth.user);

  const allAllergies = allergieOptions.sort();
  const allDiets = dietOptions.sort();

  const {
    allergies,
    cookingSkill,
    diets,
    houseHoldSize,
    gender,
    profilePic
  } = profileState;

  const handleDietSelections = value => {
    setProfileData(UPDATE_DIETS, value);
  };

  const handleAllergiesSelections = value => {
    setProfileData(UPDATE_ALLERGIES, value);
  };

  const handleDOBSelection = value => {
    setProfileData(UPDATE_DOB, value._d);
  };

  const handleSkillSelection = value => {
    setProfileData(UPDATE_SKILL, value);
  };

  const handleGenderSelection = value => {
    setProfileData(UPDATE_GENDER, value);
  };

  const handleHousehold = value => {
    setProfileData(UPDATE_HOUSEHOLD, value);
  };

  const filteredDiets = allDiets.filter(o => !diets.includes(o));
  const filteredAllergies = allAllergies.filter(a => !allergies.includes(a));

  const onImgUpload = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "MainCourse");
    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/ddtlpiqwj/image/upload",
        {
          method: "POST",
          body: data
        }
      );
      // debugger;
      const file = await res.json();
      const imgs = { small: file.secure_url, large: file.eager[0].secure_url };
      setProfileData(UPDATE_PROFILE_IMG, imgs);
    } catch (error) {
      console.log(e);
    }
  };

  const clearImg = () => {
    setProfileData(UPDATE_PROFILE_IMG, { small: "", large: "" });
  };

  if (!isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <ProfileBody>
      <div className="profileTitle">Hi {user.firstName}</div>
      <div className="profileBody">
        <div className="profileLeftSide">
          <div>
            <div>
              <LoginInfo />
            </div>
            <div>
              <ProfileImage
                pic={profilePic}
                onImgUpload={onImgUpload}
                clearImg={clearImg}
              />
            </div>
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
              <InputNumber
                min={1}
                max={10}
                defaultValue={1}
                value={houseHoldSize}
                onChange={handleHousehold}
              />
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
      <Button type="primary" size="large">
        Submit
      </Button>
    </ProfileBody>
  );
};

export default Profile;
