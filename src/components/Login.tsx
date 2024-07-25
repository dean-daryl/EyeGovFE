import React from 'react';
import google from '../assets/google.svg';
import close from '../assets/close.svg';

type Props = {
  onClose: () => void;
  onSignUp: () => void;
};

function Login({ onClose,onSignUp }: Props) {
  return (
    <>
      <div className="form-container">
        <div className="flex flex-col justify-center w-full">
          <button
            className="relative r-10"
            style={{ position: 'relative', bottom: '10px', right: '20px' }}
            onClick={onClose}
          >
            <img src={close} alt="closeIcon" />
          </button>
          <p className="title">Welcome back</p>
        </div>
        <form className="form">
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
          <p className="page-link">
            <span className="page-link-label">Forgot Password?</span>
          </p>
          <button className="form-btn">Log in</button>
        </form>
          <p className="sign-up-label" onClick={onSignUp}>
            Don't have an account?<span className="sign-up-link">Sign up</span>
          </p>
        <div className="buttons-container">
          <div className="google-login-button">
            <img src={google} alt="googleIcon" />
            <span>Log in with Google</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
