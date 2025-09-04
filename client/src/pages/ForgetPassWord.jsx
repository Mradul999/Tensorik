import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const ForgetPassWord = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const clickHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/password/reset-password", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ email }),
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.msg);
        navigate("/login");
      } else {
        alert(data.msg);
      }
    } catch (error) {
      alert("Some error occurred");
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0f172a]">
      <div className="bg-[#1e293b] p-10 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-semibold text-white text-center mb-8">
          Forgot Password
        </h2>
        <form className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-base font-medium text-gray-300 mb-3"
            >
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-5 py-3 rounded-lg bg-[#0f172a] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg"
            />
          </div>

          <button
            onClick={clickHandler}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-5 rounded-lg shadow-md transition text-lg"
          >
            Send Reset Link
          </button>
        </form>

        <p className="text-gray-400 text-base text-center mt-6">
          Remembered your password?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Back to Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default ForgetPassWord;
