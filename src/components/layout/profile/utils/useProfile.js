import { useReducer, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  UPDATE_DIETS,
  UPDATE_DOB,
  UPDATE_ALLERGIES,
  UPDATE_SKILL,
  UPDATE_GENDER,
  UPDATE_PROFILE_IMG,
  UPDATE_HOUSEHOLD
} from "../types";
import { updateProfileReducer, initialState } from "../reducers";

export const useProfile = type => {
  const [profileState, dispatchProfile] = useReducer(
    updateProfileReducer,
    initialState
  );

  useEffect(() => {
    console.log(profileState);
  }, [profileState]);

  const profile = useSelector(state => state.profile.activeProfile);

  if (profile) {
    switch (type) {
      case UPDATE_DIETS:
        dispatchProfile({ type, payload: profile.diets });
        break;
      case UPDATE_ALLERGIES:
        dispatchProfile({ type, payload: profile.allergies });
        break;
      case UPDATE_DOB:
        dispatchProfile({ type, payload: profile.dob });
        break;
      case UPDATE_SKILL:
        dispatchProfile({ type, payload: profile.cookingSkill });
        break;
      case UPDATE_GENDER:
        dispatchProfile({ type, payload: profile.gender });
        break;
      case UPDATE_HOUSEHOLD:
        dispatchProfile({ type, payload: profile.houseHoldSize });
        break;
      case UPDATE_PROFILE_IMG:
        dispatchProfile({ type, payload: profile.profilePic });
        break;
      default:
        break;
    }

    return;
  }

  const setProfileData = (type, data) => {
    switch (type) {
      case UPDATE_DIETS:
        dispatchProfile({ type, payload: data });
        break;
      case UPDATE_ALLERGIES:
        dispatchProfile({ type, payload: data });
        break;
      case UPDATE_DOB:
        dispatchProfile({ type, payload: data._d });
        break;
      case UPDATE_SKILL:
        dispatchProfile({ type, payload: data });
        break;
      case UPDATE_GENDER:
        dispatchProfile({ type, payload: data });
        break;
      case UPDATE_HOUSEHOLD:
        dispatchProfile({ type, payload: data });
        break;
      case UPDATE_PROFILE_IMG:
        dispatchProfile({ type, payload: data });
        break;
      default:
        break;
    }
  };

  return { profileState, setProfileData };
};
