import React, { useState, useRef } from "react";
import authApi from "../../../../flux/api/authApi";
import "./ResetPassword.scss";

function ResetPassword() {
	const inputRef = useRef(null);

	const handleSubmit = () => {
		console.log(inputRef.current);
		authApi.resetPassword(inputRef.current.value);
	};

	return (
		<section className="reset-password">
			<div className="reset-password__inner">
				<div className="reset-password__title">
					<h6>Reset password</h6>
				</div>

				<div className="reset-password__form">
					<form action="submit" onSubmit={handleSubmit}>
						<div style={{  textAlign: "center" }}>
							<label htmlFor="reset-password" >New password</label>
							<input type="password" id="reset-password" required/>
						</div>

						<div style={{textAlign: "center" }}>
							<button type="submit">Reset password</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

export default ResetPassword;
