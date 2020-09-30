import React from "react";
import { useSelector } from "react-redux";
import "./Profile.scss";

import ProfileForm from "../../components/ProfileForm";

function Profile() {
	const user = useSelector((state) => state.auth.user);

	return (
		<section className="profile">
			<ProfileForm user={user} />
		</section>
	);
}

export default Profile;
