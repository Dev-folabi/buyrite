// Importing necessary dependencies and utility functions
import { useState } from "react";

import FormInput from "../form-input/form-input.component";

import {
  signInWithGooglePopUp,

  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import "./sign-in-styles.css";
import Button from "../button/button.componenet";

// Default form fields to be used on component initialization and form reset
const defaultFormFields = {
  email: "",
  password: "",
};

// Functional component for the signup form
const SigninForm = () => {
  // State hook to manage form fields
  const [formField, setFormField] = useState(defaultFormFields);

  // Destructuring form fields for easy access
  const { email, password } = formField;

  // Function to reset form fields to default values
  const resetForm = () => {
    setFormField(defaultFormFields);
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopUp();
  };

  // Event handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      
      // Resetting the form after successful signup
      resetForm();
    } catch (error) {
      // Handling specific error case where email is already in use
      switch (error.code) {
        case "auth/network-request-failed":
          alert("Pls, connect to internet");
          break;
        case "auth/invalid-credential":
          alert("Invalid Login details");
          break;
        default:
          alert(error);
          break;
      }
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
      <h2>Already have an account?</h2>
      <span>Sign-in with your email and password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button type="submit">Sign-in</Button>
          <Button type='button' buttonType="google" onClick={signInWithGoogle}>
            Google Sign-in
          </Button>
        </div>
      </form>
    </div>
  );
};

// Exporting the SignupForm component as the default export
export default SigninForm;
