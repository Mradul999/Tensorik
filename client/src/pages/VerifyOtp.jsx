import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const email = sessionStorage.getItem("email");
  const password = sessionStorage.getItem("password");
  const name = sessionStorage.getItem("name");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otp) {
      alert("Please enter OTP");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/otp/verify-otp", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ otp, email, password, name }),
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        alert("otp verified successfully");
        sessionStorage.removeItem("email");
        sessionStorage.removeItem("name");
        sessionStorage.removeItem("password");

        navigate("/login");
      } else {
        alert(data.msg);
      }
    } catch (error) {
      alert("server error");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0B1221]">
      <div className="bg-[#10172A] p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-center text-white text-2xl font-semibold mb-6">
          Verify Your Email
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            className="w-full px-4 py-2 rounded-md bg-transparent border border-gray-600 text-white focus:ring-2 focus:ring-blue-500 outline-none"
          />

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium transition duration-300"
          >
            Verify OTP
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-400 text-center">
          Didn’t receive the code?{" "}
          <button
            onClick={() => alert("Resend OTP functionality here")}
            className="text-blue-400 hover:underline"
          >
            Resend
          </button>
        </p>
      </div>
    </div>
  );
};

export default VerifyOtp;
