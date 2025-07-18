import React from 'react';

const Signup = ({ onSwitch }) => {
  return (
    <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-md">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Create Account</h1>
      <form className="space-y-5">
        <input type="text" placeholder="Name" className="w-full px-4 py-3 border rounded-md" />
        <input type="email" placeholder="Email" className="w-full px-4 py-3 border rounded-md" />
        <input type="password" placeholder="Password" className="w-full px-4 py-3 border rounded-md" />
        <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-md">Sign up</button>
      </form>

      <p className="mt-6 text-sm text-center">
        Already have an account?{' '}
        <span onClick={onSwitch} className="text-blue-600 cursor-pointer hover:underline">Login</span>
      </p>
    </div>
  );
};

export default Signup;
