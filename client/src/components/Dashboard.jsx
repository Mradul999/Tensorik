// src/components/Dashboard.jsx
import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/images/Tensorik logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useUserStore from "../zustand/store.js";

const Dashboard = () => {
  const { user, setUser, clearUser } = useUserStore();
  const [profilePic, setProfilePic] = useState(null);
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const navigate = useNavigate();

  console.log("user from zustand", user);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleUpload = async () => {
    if (!profilePic) return alert("Please select an image");
    if (profilePic.size > 10 * 1024 * 1024) {
      return alert("File size should be less than 10MB");
    }

    const formData = new FormData();
    formData.append("file", profilePic);
    formData.append("upload_preset", import.meta.env.VITE_CLOUDINARY_PRESET);

    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${
          import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
        }/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      if (data.secure_url) {
        try {
          const res = await fetch(
            "http://localhost:5000/profile/update-profile-pic",
            {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify({
                email: user.email,
                profilePic: data.secure_url,
              }),
            }
          );
          const profileUpdateRes = await res.json();

          if (res.ok) {
            const updatedUser = { ...user, profilePic: data.secure_url };
            setUser(updatedUser);
            alert(profileUpdateRes.msg);
            setProfilePic(null);
          } else {
            alert(profileUpdateRes.msg);
          }
        } catch (error) {
          alert("error occurred");
        }
      } else {
        alert("Upload failed");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  const handleEdit = async () => {
    try {
      const updatedName = newName.trim() || user.name;
      const updatedEmail = newEmail.trim() || user.email;

      const res = await fetch("http://localhost:5000/edit-profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          oldEmail: user.email,
          newName: updatedName,
          newEmail: updatedEmail,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        const updatedUser = { ...user, name: updatedName, email: updatedEmail };
        setUser(updatedUser);
        alert("✅ Profile updated!");
        setEditing(false);
        setNewName("");
        setNewEmail("");
      } else {
        alert(data.msg || "Error");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  const handleLogout = () => {
    clearUser();
    navigate("/login");
  };

  if (!user) return <div className="p-6 text-black">Loading...</div>;

  return (
    <div className="bg-[#0f172a] min-h-screen text-white">
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
            src={user.profilePic || "https://i.imgur.com/4ZQZ4Z0.png"}
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

      <div className="max-w-xl mx-auto p-6">
        <div className="bg-[#1e293b] rounded-xl p-6">
          <div className="flex items-center gap-4">
            <img
              src={user.profilePic || "https://i.imgur.com/4ZQZ4Z0.png"}
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
              type="file"
              accept="image/*"
              onChange={(e) => setProfilePic(e.target.files[0])}
              className="w-full p-2 bg-[#0f172a] border border-gray-600 rounded text-sm"
            />
            <button
              onClick={handleUpload}
              className="mt-2 bg-blue-600 px-4 py-2 rounded hover:bg-blue-700"
            >
              Upload Profile Picture
            </button>
          </div>

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
