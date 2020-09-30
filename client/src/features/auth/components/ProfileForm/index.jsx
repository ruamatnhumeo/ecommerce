import React from "react";
import "./ProfileForm.scss";

function ProfileForm(props) {
	const { user } = props;

	return (
		<section className="profile-form">
			{user && (
				<div className="profile-form__inner">
					<div className="profile-form__group">
						<div className="profile-form__id">
							<span>Id: {user.id}</span>
							<span>{user.isAdmin ? "Admin" : "Member"}</span>
						</div>
						<div className="profile-form__email">
							<span>Email: {user.email}</span>
						</div>
						<div className="profile-form__password">
							<span>Password: {user.password}</span>
							<a>Reset password?</a>
						</div>
					</div>
					<div className="profile-form__group">
						<div className="profile-form__name">
							<span>Name: {user.name}</span>
						</div>
						<div className="profile-form__phone">
							<span>Phone: {user.phone}</span>
						</div>
						<div className="profile-form__address">
							<span>Address: {user.street + user.city}</span>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}

export default ProfileForm;
