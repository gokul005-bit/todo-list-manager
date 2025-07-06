import { signInWithGoogle } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      await signInWithGoogle();
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error", err);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400">
      <h1 className="text-3xl font-bold text-white mb-8 text-center drop-shadow-lg">
        Simple Todo List MERN Stack Application
      </h1>
      <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 flex flex-col items-center w-full max-w-md mx-4">
        {/* Logo or illustration */}
        <div className="mb-8">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
            <span className="text-white text-3xl font-bold">G</span>
          </div>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
          Welcome !
        </h2>
        <p className="text-gray-500 mb-8 text-center">
          Sign in to your account to continue
        </p>
        <button
          className="flex items-center gap-3 bg-blue-500 hover:bg-blue-700 transition-colors text-white font-semibold py-3 px-6 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-1000 w-full justify-center"
          onClick={handleLogin}
        >
          <svg className="w-6 h-6" viewBox="0 0 48 48">
            <g>
              <path
                fill="#4285F4"
                d="M44.5 20H24v8.5h11.7C34.6 33.9 29.8 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 4.5 29.6 2 24 2 12.9 2 4 10.9 4 22s8.9 20 20 20c11 0 19.7-8 19.7-20 0-1.3-.1-2.7-.3-4z"
              />
              <path
                fill="#34A853"
                d="M6.3 14.7l7 5.1C15.6 16.1 19.5 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.5 4.5 29.6 2 24 2 15.7 2 8.6 7.6 6.3 14.7z"
              />
              <path
                fill="#FBBC05"
                d="M24 44c5.6 0 10.5-1.8 14.3-4.9l-6.6-5.4C29.7 36.9 27 38 24 38c-5.7 0-10.5-3.7-12.2-8.8l-7 5.4C8.5 40.4 15.7 44 24 44z"
              />
              <path
                fill="#EA4335"
                d="M44.5 20H24v8.5h11.7c-1.1 3.1-4.1 5.5-7.7 5.5-2.2 0-4.2-.7-5.7-2l-7 5.4C18.5 40.4 21.1 44 24 44c7.2 0 13-5.8 13-13 0-1.3-.1-2.7-.3-4z"
              />
            </g>
          </svg>
          Login with Google
        </button>
      </div>
    </div>
  );
}
