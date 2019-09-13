import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
// import FormErrors from "./FormErrors";
// import "../../node_modules/bootstrap/dist/css/bootstrap.css";
// import "../../node_modules/bootstrap/dist/css/bootstrap-theme.css";

class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.PostData = this.PostData.bind(this);
    this.Check = this.Check.bind(this);
    this.handleUserInput = this.handleUserInput.bind(this);
    this.FormErrors = this.FormErrors.bind(this);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      formErrors: {
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: ""
      },

      emailValid: false,
      passwordValid: false,
      confirmPasswordValid: false,
      firstNameValid: false,
      lastNameValid: false,
      formValid: false
    };
  }

  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }
  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }
  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
    let firstNameValid = this.state.firstNameValid;
    let lastNameValid = this.state.lastNameValid;
    let confirmPasswordValid = this.state.confirmPasswordValid;

    switch (fieldName) {
      case "email":
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? "" : " is invalid";
        break;
      case "password":
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid
          ? ""
          : "Password is too short";
        break;
      case "firstName":
        firstNameValid = value.replace(/\s/g, "").length > 0;
        fieldValidationErrors.firstName = firstNameValid
          ? ""
          : "First name is required";
        break;
      case "lastName":
        lastNameValid = value.replace(/\s/g, "").length > 0;
        console.log(lastNameValid);
        fieldValidationErrors.lastName = lastNameValid
          ? ""
          : "Last name is required";
        break;
      case "confirmPassword":
        confirmPasswordValid = value === this.password.value;
        fieldValidationErrors.confirmPassword = confirmPasswordValid
          ? ""
          : "Passwords do not match";

        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        emailValid: emailValid,
        passwordValid: passwordValid,
        firstNameValid: firstNameValid,
        lastNameValid: lastNameValid,
        confirmPasswordValid: confirmPasswordValid
      },

      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.emailValid &&
        this.state.passwordValid &&
        this.state.firstNameValid &&
        this.state.lastNameValid &&
        this.state.confirmPasswordValid
    });
    if (this.state.formValid) {
      this.button.style.opacity = "1";
    } else {
      this.button.style.opacity = "0.3";
    }
  }

  Check(e) {
    const value = e.target.value.replace(/\s/g, "").length;
    console.log(value);
    if (value > 0) {
      e.target.style.border = "";
    } else {
      e.target.style.border = "2px solid #8a2e2d";
    }
    // if (this.value === 0) {
    //   this.confirmPassword.style.color = "green";
    //   this.button.disabled = "";
    //   this.button.style.opacity = "0.7";
    // } else {
    //   this.confirmPassword.style.color = "red";
    //   this.button.disabled = "disabled";
    //   this.button.style.opacity = "0";
    // }
  }

  PostData() {
    fetch("http://localhost:3000/user", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.email.value,
        password: this.password.value,
        firstName: this.firstName.value.replace(/\s/g, ""),
        lastName: this.lastName.value.replace(/\s/g, "")
      })
    })
      .then(response => response.json())
      .then(res => {
        alert("it's good!", res.newUser);
        this.props.history.push("/");
      })
      .catch(error => console.error("Ошибка:", error));
  }

  FormErrors(formErrors) {
    if (formErrors.length > 0) {
      return formErrors;
    } else {
      return "";
    }
  }

  render() {
    return (
      <div className="Main">
        <h1> Create an account </h1>{" "}
        <p>
          {" "}
          Already have an account ? <Link to="/SignIn"> Sign in </Link>{" "}
        </p>{" "}
        <div
          className={`form-group
                 ${this.errorClass(this.state.formErrors.firstName)}
                 `}
        >
          <label>{this.state.formErrors.firstName}</label>
          <input
            ref={ref => {
              this.firstName = ref;
            }}
            className="input"
            type="text"
            required
            onBlur={this.Check}
            pattern="#[a-zA-Z]+$"
            value={this.state.firstName}
            onChange={this.handleUserInput}
            name="firstName"
            placeholder="First name"
          />{" "}
        </div>{" "}
        <div
          className={`form-group
                 ${this.errorClass(this.state.formErrors.lastName)}`}
        >
          <label>{this.state.formErrors.lastName}</label>
          <input
            ref={ref => {
              this.lastName = ref;
            }}
            className="input"
            type="text"
            required
            onBlur={this.Check}
            value={this.state.lastName}
            onChange={this.handleUserInput}
            name="lastName"
            placeholder="Last name"
          />{" "}
        </div>{" "}
        <div
          className={`form-group
                 ${this.errorClass(this.state.formErrors.email)}`}
        >
          <label>{this.state.formErrors.email}</label>
          <input
            ref={ref => {
              this.email = ref;
            }}
            className="input"
            type="email"
            required
            onBlur={this.Check}
            value={this.state.email}
            onChange={this.handleUserInput}
            name="email"
            placeholder="E-mail"
          />{" "}
        </div>{" "}
        <div
          className={`form-group
                 ${this.errorClass(this.state.formErrors.password)}`}
        >
          <label>{this.state.formErrors.password}</label>
          <input
            ref={ref => {
              this.password = ref;
            }}
            className="input"
            type="password"
            required
            onBlur={this.Check}
            value={this.state.password}
            onChange={this.handleUserInput}
            name="password"
            placeholder="Password"
          />{" "}
        </div>{" "}
        <div
          className={`form-group
                 ${this.errorClass(this.state.formErrors.confirmPassword)}`}
        >
          <label>{this.state.formErrors.confirmPassword}</label>
          <input
            ref={ref => {
              this.confirmPassword = ref;
            }}
            className="input"
            type="password"
            required
            onBlur={this.Check}
            value={this.state.confirmPassword}
            onChange={this.handleUserInput}
            name="confirmPassword"
            placeholder="Confirm password"
          />{" "}
        </div>{" "}
        <button
          className="btn"
          onClick={this.PostData}
          disabled={!this.state.formValid}
          ref={ref => {
            this.button = ref;
          }}
        >
          Continue{" "}
        </button>{" "}
      </div>
    );
  }
}

export default Registration;
