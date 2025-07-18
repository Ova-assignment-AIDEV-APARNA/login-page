// forgetandresetpw.jsx
import React, { useState } from 'react';

const ForgetPassword = () => {
    const [showOTP, setShowOTP] = useState(false);

  const handleSendLink = (e) => {
    e.preventDefault(); // Prevent page reload
    setShowOTP(true);   // Show OTP input section
  };
  return (
    <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
      <form onSubmit={handleSendLink}>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 border rounded mb-4"
          required
        />
        <button 
        type ="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Send Reset Link
        </button>
      </form>

       {showOTP && (
        <div className="mt-6">
          <label className="block text-gray-700 mb-2">Enter OTP:</label>
          <input
            type="text"
            placeholder="Enter the OTP sent to your email"
            className="w-full px-4 py-2 border rounded"
            maxLength={6}
          />
          <button 
          type="submit"
          className="mt-4 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Verify OTP
          </button>
        </div>
      )}

    </div>
  );
};

export default ForgetPassword;
