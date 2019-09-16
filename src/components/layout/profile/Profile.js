import React, { useReducer } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { DatePicker, Select } from "antd";
import ProfileBody from "../styled/ProfileBody";
import { updateProfileReducer, initialState } from "./reducers";
import {
	UPDATE_DIETS,
	UPDATE_DOB,
	UPDATE_ALLERGIES,
	UPDATE_SKILL
} from "./types";

const allDiets = [
	"Keto",
	"Paleo",
	"Atkins",
	"Whole30",
	"Vegetarian",
	"Vegan",
	"Gluten Free",
	"Intermittent Fasting",
	"Weight Watchers"
];

const allAllergies = [
	"Milk/Dairy",
	"Eggs",
	"Peanuts",
	"Tree Nuts",
	"Shellfish",
	"Fish",
	"Wheat",
	"Gluten",
	"Soy"
];

const skills = [
	"Beginner",
	"Intermediate",
	"Average",
	"Skilled",
	"Pro",
	"Top Chef"
];

const Profile = () => {
	const isAuth = useSelector(state => state.auth.isAuthenticated);
	const [profileData, dispatchProfile] = useReducer(
		updateProfileReducer,
		initialState
	);

	const { allergies, cookingSkill, diets, houseHoldSize, gender } = profileData;
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

	const filteredDiets = allDiets.filter(o => !diets.includes(o));
	const filteredAllergies = allAllergies.filter(a => !allergies.includes(a));

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
								mode="multiple"
								placeholder="Allergies"
								value={allergies}
								onChange={handleAllergiesSelections}
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
								placeholder="Skill Level"
								value={cookingSkill}
								onChange={handleSkillSelection}
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
					</div>
				</div>
			</div>
		</ProfileBody>
	);
};

export default Profile;
