import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";

export default function Login() {
  return (
    <div className="container row m-auto">
      <SignupForm />
      <LoginForm />
    </div>
  );
}
