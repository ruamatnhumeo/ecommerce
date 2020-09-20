import React, { useState, useEffect, useCallback } from "react";
import { Button, FormGroup, Alert, Spinner } from "reactstrap";
import { FastField, Form, Formik } from "formik";
import InputField from "../../../../custom-fields/InputField";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "../../../../flux/actions/errorAction";
import { register } from "../../../../flux/actions/authAction";
import ForgetPassword from "../../components/ForgetPassword";

const initialValues = {
	name: "",
	email: "",
	password: "",
};

const validationSchema = Yup.object().shape({
	name: Yup.string().required("This field is required"),

	email: Yup.string().required("This field is required"),

	password: Yup.string()
		.label("Password")
		.required("This field is required")
		.min(6, "At least 6 characters")
		.max(20, "Too long, try a shorter password"),
});

function LoginModal() {
	const [modal, setModal] = useState(false);
	const [message, setMeesage] = useState(null);
	const [isForgetDropdownOpen, setIsForgetDropdownOpen] = useState(false);

	const dispatch = useDispatch();
	const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
	const error = useSelector((state) => state.error);

	const handleForgetDropdown = () => {
		setIsForgetDropdownOpen(!isForgetDropdownOpen);
	};

	const handleToggle = useCallback(() => {
		// Clear errors
		dispatch(clearErrors());
		setModal(!modal);
	}, [clearErrors, modal]);

	useEffect(() => {
		// Check for register error
		if (error.id === "REGISTER_FAIL") {
			setMeesage(error.msg.msg);
		} else {
			setMeesage(null);
		}

		// If authenticated, close modal
		if (modal) {
			if (isAuthenticated) {
				handleToggle();
			}
		}
	}, [error, isAuthenticated, handleToggle, modal]);

	const handleOnSubmit = (values) => {
		// POST on server
		const user = {
			...values,
		};
		dispatch(register(user));
	};

	return (
		<div className="register">
			<h6 className="register__title">Register</h6>
			{message ? <Alert color="danger">{message}</Alert> : null}
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
					// console.log({ values, errors, touched });

					return (
						<Form className="register__form">
							<FastField
								name="name"
								component={InputField}
								label="Name"
								placeholder="name..."
							/>

							<FastField
								name="email"
								component={InputField}
								label="Email"
								placeholder="email@gmail..."
							/>

							<FastField
								name="password"
								type="password"
								component={InputField}
								label="Password"
								placeholder="password..."
							/>

							<FormGroup>
								<Button type="submit" color="success">
									{isSubmitting && (
										<Spinner size="sm" color="dark" />
									)}
									Register
								</Button>
							</FormGroup>
						</Form>
					);
				}}
			</Formik>
			<div className="forget-password">
				<a href="#" onClick={handleForgetDropdown}>Forget password!</a>
			</div>
			<ForgetPassword
				isOpen={isForgetDropdownOpen}
				onClose={handleForgetDropdown}
			/>
		</div>
	);
}

export default LoginModal;
