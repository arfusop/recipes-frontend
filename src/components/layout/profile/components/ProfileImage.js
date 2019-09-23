import React from "react";
import { Icon } from "antd";

const ProfileImage = ({ pic, onImgUpload }) => {
	console.log(pic);
	return (
		<div>
			upload profile image
			<label>
				{pic.small ? <img src={pic.small} /> : <Icon type="user-add" />}
				<input
					type="file"
					id="file"
					name="file"
					placeholder="Upload profile pic"
					required
					onChange={e => {
						console.log("upload image..");
						onImgUpload(e);
					}}
				/>
			</label>
		</div>
	);
};

export default ProfileImage;
