import React, { useState } from 'react';
import google from '../assets/google.svg';
import close from '../assets/close.svg';
import toast from 'react-hot-toast';

type Props = {
  onClose: () => void;
  onSignUp: () => void;
};

function Login({ onClose, onSignUp }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch(
      `${import.meta.env.VITE_BASE_URL}/auth/login`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }),
      },
    );

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      localStorage.setItem('user_id', data.user.id);
      toast.success('Login successful');
      onClose();
      window.location.href = '/dashboard';
    } else {
      toast.error('Whoops! Something went wrong😯');
      console.error('Login failed');
    }
  };
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
          <input
            type="email"
            className="input"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="input"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="page-link">
            <span className="page-link-label">Forgot Password?</span>
          </p>
          <button className="form-btn" onClick={handleSubmit}>
            Log in
          </button>
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
