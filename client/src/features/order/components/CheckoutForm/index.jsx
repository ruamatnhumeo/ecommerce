import React from "react";
import "./CheckoutForm.scss";
import { FastField, Form, Formik } from "formik";
import InputField from "../../../../custom-fields/InputField";

function CheckoutForm(props) {
	const { onCheckoutSubmit } = props;

	const initialValues = {
		email: "",
		toCity: "",
		address: "",
		paymentMethod: "",
	};

	const handleOnSubmit = (value) => {
		if (!onCheckoutSubmit) return;

		onCheckoutSubmit(value);
	};

	return (
		<div className="checkout-form">
			<div className="checkout-form__title">
				<h6>Checkout</h6>
			</div>

			<div className="checkout-form__detail">
				<Formik initialValues={initialValues} onSubmit={handleOnSubmit}>
					{(formikProps) => {
						return (
							<Form>
								<FastField
									name="email"
									component={InputField}
									label="Email"
									placeholder=""
								/>

								<FastField
									name="toCity"
									component={InputField}
									label="To city"
									placeholder=""
								/>

								<FastField
									name="address"
									component={InputField}
									label="Address"
									placeholder=""
								/>

								<FastField
									name="paymentMethod"
									component={InputField}
									label="Payment Method"
									placeholder=""
								/>

								<div className="checkout-form__button">
									<button type="submit">Checkout</button>
								</div>
							</Form>
						);
					}}
				</Formik>
			</div>
		</div>
	);
}

export default CheckoutForm;
