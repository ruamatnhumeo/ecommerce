import React, { useRef } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import authApi from "../../../../flux/api/authApi";
import "./ResetPassword.scss";

function ResetPassword() {
	const [msg, setMsg] = useState(null);
	const inputRef = useRef(null);
	const { token } = useParams();

	const resetPassword = async (password) => {
		const response = await authApi.resetPassword(password, token);
		setMsg(response);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		resetPassword(inputRef.current.value);
	};

	return (
		<section className="reset-password">
			<div className="reset-password__inner">
				<div className="reset-password__title">
					<h6>Reset password</h6>
				</div>

				<div className="reset-password__message">
					{msg && <p>{msg}</p>}
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
