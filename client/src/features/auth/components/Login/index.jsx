import React, { useState } from "react";
import "./Login.scss";
import { FastField, Form, Formik } from "formik";
import InputField from "../../../../custom-fields/InputField";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

import ForgetPassword from "../ForgetPassword";

const initialValues = {
	email: "",
	password: "",
};

const validationSchema = Yup.object().shape({
	email: Yup.string().required("This field is required"),

	password: Yup.string()
		.label("Password")
		.required("This field is required")
		.min(6, "At least 6 characters")
		.max(20, "Too long, try shorter password"),
});

function Login(props) {
	const [isForgetDropdowmOpen, setIsForgetDropdownOpen] = useState(false);
	const history = useHistory();
	const { loginOpen, message, onLoginClick, onLoginSubmit } = props;
	const dropdownClass = !loginOpen
		? "login__dropdown"
		: "login__dropdown login__dropdown--open";

	const handleForgetDropdown = () => {
		setIsForgetDropdownOpen(!isForgetDropdowmOpen);
	};

	const handleOnClick = () => {
		if (!onLoginClick) return;

		onLoginClick();
	};

	const handleOnSubmit = (values) => {
		if (!onLoginSubmit) return;

		onLoginSubmit(values);
	};

	const handleRegisterClick = () => {
		const registerUrl = "/auth/register";
		history.push(registerUrl);
	};

	return (
		<section className="login">
			<div className="login__title-button" onClick={handleOnClick}>
				LOGIN
			</div>

			<section className={dropdownClass}>
				<div className="login__dropdown__inner">
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={handleOnSubmit}
					>
						{(formikProps) => {
							const {
								values,
								errors,
								touched,
								isSubmitting,
							} = formikProps;

							return (
								<Form>
									<div className="login__alert">
										{message ? (
											<span className="login__alert__message">
												{message}
											</span>
										) : null}
									</div>
									<FastField
										name="email"
										component={InputField}
										label="Email"
										placeholder=""
									/>

									<FastField
										name="password"
										type="password"
										component={InputField}
										label="Password"
										placeholder=""
									/>

									<div className="login__form-group">
										<button
											type="submit"
											className="button login__button"
										>
											Login
										</button>

										<div className="login__actions">
											<span
												onClick={handleForgetDropdown}
											>
												<a href="#">Forget password?</a>
											</span>
											<button
												className="button login__register-button"
												onClick={handleRegisterClick}
											>
												Register
											</button>
										</div>
									</div>
								</Form>
							);
						}}
					</Formik>
				</div>
			</section>
			<ForgetPassword
				isOpen={isForgetDropdowmOpen}
				onClose={handleForgetDropdown}
			/>
		</section>
	);
}

export default Login;

//how to close and open `
