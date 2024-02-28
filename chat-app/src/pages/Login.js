import React from "react";
import "../style.scss";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Kaushik Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sig in</button>
        </form>
        <p>Dou you have an account? Login</p>
      </div>
    </div>
  );
};

export default Login;
