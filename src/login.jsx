import React from 'react';
const Login = ({ onSwitch }) => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-gray-600 mb-2 text-sm">Please enter your details</h2>
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome back</h1>

        <form className="space-y-5">
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Remember 
            </label>
            <a href="#" className="text-blue-600 hover:underline">Forgot password</a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md"
          >
            Sign in
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center border border-gray-300 py-3 rounded-md"
          >
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
            Sign in with Google
          </button>
        </form>

        <p className="mt-6 text-sm text-center">
          Don’t have an account?{' '}
           <span onClick={onSwitch} className="text-blue-600 cursor-pointer hover:underline">Sign up</span>
           </p>
      </div>
    </div>
  );
};

export default Login;
