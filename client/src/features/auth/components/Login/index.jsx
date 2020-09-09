import React from "react";
import "./Login.scss";
import { FastField, Form, Formik } from "formik";
import InputField from "../../../../custom-fields/InputField";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const { loginOpen, message, onLoginClick, onLoginSubmit } = props;
  const dropdownClass = !loginOpen
    ? "login__dropdown"
    : "login__dropdown login__dropdown--open";

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
      <div  className="login__title-button" onClick={handleOnClick}>
        LOGIN
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleOnSubmit}
      >
        {(formikProps) => {
          const { values, errors, touched, isSubmitting } = formikProps;

          return (
            <section className={dropdownClass}>
              
            <Form>
              <div className="login__alert">
                {message ? (
                  <span className="login__alert__inner">{message}</span>
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
                <button type="submit" className="button login__button">
                  Login
                </button>

                <div className="login__actions">
                  <span>
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
            </section>
          );
        }}
      </Formik>
    </section>
  );
}

export default Login;

//how to close and open `
