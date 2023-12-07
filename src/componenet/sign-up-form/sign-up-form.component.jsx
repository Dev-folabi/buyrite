// Importing necessary dependencies and utility functions
import { useState } from "react";

import FormInput from "../form-input/form-input.component";

import {
  createAuthUserWithEmailAndPassword,
  createDocumentUserFromAuth,
} from "../../utils/firebase/firebase.utils";

import "./sign-up-styles.css";
import Button from "../button/button.componenet";

// Default form fields to be used on component initialization and form reset
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

// Functional component for the signup form
const SignupForm = () => {
  // State hook to manage form fields
  const [formField, setFormField] = useState(defaultFormFields);

  // Destructuring form fields for easy access
  const { displayName, email, password, confirmPassword } = formField;

  // Function to reset form fields to default values
  const resetForm = () => {
    setFormField(defaultFormFields);
  };

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Checking if passwords match, displaying alert if not
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      // Creating user authentication and document with user data
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createDocumentUserFromAuth(user, { displayName });
      // Resetting the form after successful signup
      resetForm();
    } catch (error) {
      // Handling specific error case where email is already in use
      if (error.code === "auth/email-already-in-use") {
        alert("Email already in use");
      }
      // Logging other errors to the console
      console.log(error);
    }
  };

  // Event handler for input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Updating the form field state with the new value
    setFormField({ ...formField, [name]: value });
  };

  // JSX for the signup form
  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign-up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">Sign-up</Button>
      </form>
    </div>
  );
};

// Exporting the SignupForm component as the default export
export default SignupForm;
