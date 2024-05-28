import LogInForm from "components/login-form/login-form";
import RegisterForm from "components/register-form/register-form";
import { useState } from "react";
function Authenticate() {
  const [registerMode, setRegisterMode] = useState(false);
  return registerMode ? (
    <div className="authenticate">
      <RegisterForm />
      <p>
        Already have an account?
        <b
          onClick={() => setRegisterMode(false)}
          className="authenticate__anchor"
        >
          Login
        </b>
      </p>
    </div>
  ) : (
    <div className="authenticate">
      <LogInForm />
      <p>
        Don't have an account?
        <b
          onClick={() => setRegisterMode(true)}
          className="authenticate__anchor"
        >
          Register
        </b>
      </p>
    </div>
  );
}

export default Authenticate;
