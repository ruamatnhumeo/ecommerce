import React, { useRef } from "react";
import Modal from "react-modal";
import "./ForgetPassword.scss";
import authApi from "../../../../flux/api/authApi";

function ForgetPassword(props) {
	const { isOpen, onClose } = props;
	const inputRef = useRef(null);

	const handleClose = () => {
		if (!onClose) return;

		onClose();
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const email = inputRef.current.value;
		authApi.forgetPassword(email);
	};

	const customStyles = {
		overlay: {
			zIndex: "1000",
		},
		content: {
			padding: "0",
			top: "53%",
			left: "50%",
			right: "auto",
			bottom: "auto",
			marginRight: "-50%",
			transform: "translate(-50%, -50%)",

			width: "766px",
			height: "598px",
			border: "1px solid #000000",
			borderRadius: "none",
		},
	};

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={handleClose}
			style={customStyles}
		>
			<div className="forget-password">
				<div className="forget-password__inner">
					<div className="forget-password__header">
						<div className="forget-password__title">
							<h6>Forgot you password?</h6>
						</div>
						<div className="forget-password__close-btn">
							<span onClick={handleClose}>x</span>
						</div>
					</div>

					<div className="forget-password__form">
						<form onSubmit={handleSubmit}>
							<div className="forget-password__note">
								<p>
									Enter the email address you signed up with
									and we will send you a link for a new
									password.
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
	);
}

export default ForgetPassword;
