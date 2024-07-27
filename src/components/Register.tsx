import google from '../assets/google.svg';
import close from '../assets/close.svg';

type Props = {
  onClose: () => void;
  onSignIn: () => void;
};

function Register({ onClose, onSignIn }: Props) {
  return (
    <>
      <div className="form-container">
        <div className=" flex flex-col justify-center w-full">
          <button
            className="relative r-10"
            style={{ position: 'relative', bottom: '10px', right: '20px' }}
            onClick={onClose}
          >
            <img src={close} alt="" />
          </button>
          <p className="title">Create Account</p>
        </div>
        <form className="form">
          <input type="text" className="input" placeholder="Name" />
          <input type="email" className="input" placeholder="Email" />
          <input type="password" className="input" placeholder="Password" />
          <p className="page-link"></p>
          <button className="form-btn">Sign up</button>
        </form>
        <p className="sign-up-label" onClick={onSignIn}>
          Already have an account? <span className="sign-up-link">Login</span>
        </p>
        <div className="buttons-container">
          <div className="google-login-button">
            <img src={google} alt="" />
            <span>Register with Google</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
