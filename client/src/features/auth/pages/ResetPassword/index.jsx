import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import authApi from "../../../../flux/api/authApi";
import "./ResetPassword.scss";

function ResetPassword() {
	const inputRef = useRef(null);
	const { token } = useParams();

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(inputRef.current.value);
		authApi.resetPassword(inputRef.current.value, token);
	};

	return (
		<section className="reset-password">
			<div className="reset-password__inner">
				<div className="reset-password__title">
					<h6>Reset password</h6>
				</div>

				<div className="reset-password__form">
					<form action="submit" onSubmit={handleSubmit}>
						<div style={{ textAlign: "center" }}>
							<label htmlFor="reset-password">New password</label>
							<input
								type="password"
								id="reset-password"
								required
								ref={inputRef}
							/>
						</div>

						<div style={{ textAlign: "center" }}>
							<button type="submit">Reset password</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

export default ResetPassword;
