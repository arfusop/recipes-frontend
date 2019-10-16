import React from "react";
import { Button, Icon } from "antd";
import ProfileImgBody from "../../styled/ProfileImgBody";

const ProfileImage = ({ pic, onImgUpload, clearImg }) => {
  console.log(pic);
  return (
    <ProfileImgBody className="profilePictureContainer">
      <h4>Upload Profile Picture</h4>
      <label>
        <div>
          {pic && pic.small ? (
            <img src={pic.small} alt="profile_image" />
          ) : (
            <Icon className="profileImgPlaceholder" type="user-add" />
          )}
        </div>
        <div>
          <input
            type="file"
            id="file"
            name="file"
            placeholder="Upload profile pic"
            required
            onChange={e => {
              onImgUpload(e);
            }}
          />
          <Button onClick={clearImg} size="small" type="primary">
            <Icon type="close" />
          </Button>
        </div>
      </label>
    </ProfileImgBody>
  );
};

export default ProfileImage;
