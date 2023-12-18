import SignupForm from "../../componenet/sign-up-form/sign-up-form.component";
import SigninForm from "../../componenet/sign-in-form/sign-in-form.component";
import "./authentication.component.scss";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SigninForm />
      <SignupForm />
    </div>
  );
};
export default Authentication;
