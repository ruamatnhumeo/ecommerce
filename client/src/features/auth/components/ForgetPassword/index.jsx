import React, { useState, useRef } from "react";
import Modal from "react-modal";
import "./ForgetPassword.scss";
import authApi from "../../../../flux/api/authApi";

function ForgetPassword() {
	const [isOpen, setIsOpen] = useState(false);
	const inputRef = useRef(null);

	const handleOnClick = () => {
		setIsOpen(!isOpen);
	};

	const handleSubmit = (event) => {
		console.log(inputRef.current);
		authApi.forgetPassword(inputRef.current.value);
	};

	return (
		<section>
			<div className="forget-password__toggle">
				<a>Forget password?</a>
			</div>

			<Modal isOpen={handleOnClick} onRequestClose={handleOnClick}>
				<div className="forget-password">
					<div className="forget-password__inner">
						<div className="forget-password__header">
							<div className="forget-password__title">
								<h6>Forgot you password?</h6>
							</div>
							<div className="forget-password__close-btn">
								<span onClick={handleOnClick}>x</span>
							</div>
						</div>

						<div className="forget-password__form">
							<form action="submit" onSubmit={handleSubmit}>
								<div className="forget-password__note">
									<p>
										Enter the email address you signed up
										with and we will send you a link for a
										new password.
									</p>
								</div>
								<div className="forget-password__input">
									<label htmlFor="email">Email*</label>
									<input
										type="text"
										name="email"
										id="email"
										ref={inputRef}
										required
									/>
								</div>
								<div className="forget-password__btn">
									<button type="submit">Send</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</Modal>
		</section>
	);
}

export default ForgetPassword;
