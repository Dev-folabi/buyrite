import {
  signInWithGooglePopUp,
  createDocumentUserFromAuth,
} from "../../utils/firebase/firebase.utils";

import SignupForm from "../../componenet/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    createDocumentUserFromAuth(user);
  };
  return (
    <div>
      <h1> Sign In Page </h1>
      <button onClick={logGoogleUser}>Sign In With Google</button>

      <SignupForm />
    </div>
  );
};
export default SignIn;
