// src/components/Dashboard.jsx
import React, { useEffect, useState, useRef } from "react";
import logo from "../assets/images/Tensorik logo.png";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState("");
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      setUser(JSON.parse(stored));
    } else {
      const fallback = {
        name: "Akshai Naidu",
        email: "akshaimaripi449@gmail.com",
        profilePic: "https://i.imgur.com/4ZQZ4Z0.png",
      };
      setUser(fallback);
      localStorage.setItem("user", JSON.stringify(fallback));
    }

    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleUpload = async () => {
    if (!profilePic) return alert("Please enter a URL for the image");

    try {
      const res = await fetch("http://localhost:5000/upload-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: user.email, profilePic }),
      });

      const data = await res.json();
      if (res.ok) {
        const updatedUser = { ...user, profilePic };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        alert("✅ Profile picture updated!");
      } else {
        alert(data.msg || "Upload failed");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  const handleEdit = async () => {
    try {
      const res = await fetch("http://localhost:5000/edit-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          oldEmail: user.email,
          newName,
          newEmail,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        const updatedUser = {
          ...user,
          name: newName,
          email: newEmail,
        };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
        alert("✅ Profile updated!");
        setEditing(false);
      } else {
        alert(data.msg || "Error");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  if (!user) return <div className="p-6 text-white">Loading...</div>;

  return (
    <div className="bg-[#0f172a] min-h-screen text-white">
      {/* Top Navbar */}
      <div className="flex justify-between items-center p-4 border-b border-gray-700">
        <Link to="/" className="flex items-center z-50">
          <img
            src={logo}
            alt="Tensorik Logo"
            className="w-36 md:w-44 object-contain hover:scale-105 transition duration-300"
          />
        </Link>
        <div className="relative" ref={dropdownRef}>
          <img
            src={user.profilePic}
            alt="Profile"
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="w-10 h-10 rounded-full cursor-pointer"
          />
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 bg-[#1e293b] border border-gray-700 rounded shadow-lg w-48 z-10">
              <div className="px-4 py-2 border-b border-gray-600">
                <p className="text-sm font-medium">{user.name}</p>
                <p className="text-xs text-gray-400">{user.email}</p>
              </div>
              <ul className="text-sm">
                <li
                  className="px-4 py-2 hover:bg-[#334155] cursor-pointer"
                  onClick={() => setEditing(true)}
                >
                  ✏️ Edit Profile
                </li>
                <li
                  className="px-4 py-2 hover:bg-[#334155] cursor-pointer"
                  onClick={handleLogout}
                >
                  🚪 Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-xl mx-auto p-6">
        <div className="bg-[#1e293b] rounded-xl p-6">
          <div className="flex items-center gap-4">
            <img
              src={user.profilePic}
              className="w-16 h-16 rounded-full border-2 border-blue-500"
              alt="Profile"
            />
            <div>
              <h2 className="text-xl font-semibold">{user.name}</h2>
              <p className="text-sm text-gray-400">{user.email}</p>
            </div>
          </div>

          <div className="mt-4">
            <input
              type="text"
              value={profilePic}
              onChange={(e) => setProfilePic(e.target.value)}
              placeholder="Paste new profile pic URL"
              className="w-full p-2 bg-[#0f172a] border border-gray-600 rounded text-sm"
            />
            <button
              onClick={handleUpload}
              className="mt-2 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            >
              Upload Profile Picture
            </button>
          </div>

          {/* Edit Section */}
          {editing && (
            <div className="mt-6 space-y-2">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="New Name"
                className="w-full p-2 bg-[#0f172a] border border-gray-600 rounded text-sm"
              />
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="New Email"
                className="w-full p-2 bg-[#0f172a] border border-gray-600 rounded text-sm"
              />
              <div className="flex gap-2">
                <button
                  onClick={handleEdit}
                  className="bg-green-600 px-4 py-2 rounded hover:bg-green-700"
                >
                  Save
                </button>
                <button
                  onClick={() => setEditing(false)}
                  className="bg-gray-600 px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
