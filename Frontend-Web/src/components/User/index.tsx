import React from "react";
import LoginForm from "./LoginForm";
import { useParams } from "react-router-dom";
import RegisterForm from "./RegisterForm";

const Login = () => {
  const { type } = useParams();
  return (
    <section className="p-login-form">
      <div className="p-login-form__img">
        <div
          className="p-login-form__img-con"
          style={{
            backgroundImage:
              "url('https://th.bing.com/th/id/R.d764953312402d05364fb658b787148f?rik=2Z3PdtXXSrxPkA&pid=ImgRaw&r=0')",
          }}
        ></div>
      </div>
      {type === "sign-up" && <RegisterForm />}
      {type === "sign-in" && <LoginForm />}
    </section>
  );
};

export default Login;
