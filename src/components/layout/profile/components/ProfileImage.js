import React from "react";

const ProfileImage = ({ pic, onImgUpload }) => {
  console.log(pic);
  return (
    <div>
      upload profile image
      <label>
        <input
          type="file"
          id="file"
          name="file"
          placeholder="Upload profile pic"
          required
          onChange={e => onImgUpload(e)}
        />
        {}
      </label>
    </div>
  );
};

export default ProfileImage;
