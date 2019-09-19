import React from "react";

const ProfileImage = ({ onImgUpload }) => {
  return (
    <div>
      upload profile image
      <input
        type="file"
        id="file"
        name="file"
        placeholder="Upload profile pic"
        required
        onChange={e => onImgUpload(e)}
      />
    </div>
  );
};

export default ProfileImage;
