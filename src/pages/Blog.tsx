import { useState } from 'react';
import NavBar from '../components/NavBar';
import blob from '../assets/blob.jpeg';
import dean from '../assets/dean.jpg';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import Login from '../components/Login';
import Register from '../components/Register';

type Props = {};

export default function Blog({}: Props) {
  const modal = `
   <p>Fugit, impedit, cons.</p>

<p>;sfko
	<br><img src="blob:http://localhost:5173/35941b10-4eb9-47df-b419-ee10f05f9222" style="width: 300px;" class="fr-fic fr-dib"></p>

<p>kfasjnkfnaksjc</p>
`;
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isRegisterVisible, setIsRegisterVisible] = useState(false);

  return (
    <div>
      <NavBar onLogin={() => setIsLoginVisible(true)} />
      <div>
        <div className="flex flex-col items-center bg-white p-10">
          {/* Author information */}
          <div className="text-center">
            <img
              src={dean}
              alt="Author"
              className="rounded-full bg-auto w-24 h-24 mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">Sergy Campbell</h3>
            <p className="text-gray-600">JULY 2, 2020</p>
          </div>
          {/* ARTICLE */}
          <h1 className="text-4xl font-bold mt-6 w-[68%] text-center">
            Your most unhappy customers are your greatest source of learning.
          </h1>
          <p className="text-lg text-gray-600 mt-4 w-[50%] text-center">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="mt-6">
            <img src={blob} alt="Article" className="w-[696px] h-[447px]" />
          </div>
          <div className="w-[65%] mt-10 text-gray-600 text-lg">
            <FroalaEditorView model={modal} />
          </div>
        </div>
      </div>
      {/* Authorisation pop up */}
      <div
        className={`fixed mx-auto inset-0 flex justify-center items-center z-50 ${
          isLoginVisible || isRegisterVisible
            ? 'bg-black bg-opacity-25'
            : 'hidden'
        }`}
      >
        {isLoginVisible && (
          <div className=" p-4 rounded-lg">
            <Login
              onSignUp={() => {
                setIsRegisterVisible(true);
                setIsLoginVisible(false);
              }}
              onClose={() => setIsLoginVisible(false)}
            />
          </div>
        )}
        {isRegisterVisible && (
          <div>
            <Register
              onSignIn={() => {
                setIsLoginVisible(true);
                setIsRegisterVisible(false);
              }}
              onClose={() => setIsRegisterVisible(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
