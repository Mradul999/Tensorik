// src/components/Header.jsx
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/Tensorik logo.png";
import useUserStore from "../zustand/store.js";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const { user, clearUser } = useUserStore();

  const toggleMobileMenu = () => setMobileOpen(!mobileOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    clearUser();
    setDropdownOpen(false);
    navigate("/login");
  };

  const navItems = ["Courses", "Workshops", "Community", "Resources", "About"];

  return (
    <header className="sticky top-0 z-40 px-4 md:px-10 bg-[#161b22] shadow-md border-b border-[#21262d]">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 md:h-20 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center z-50">
          <img
            src={logo}
            alt="Tensorik Logo"
            className="w-36 md:w-44 object-contain hover:scale-105 transition duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm mx-auto">
          {navItems.map((item) => (
            <Link
              key={item}
              to={item === "Courses" ? "/courses" : "/coming-soon"}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center space-x-4 relative">
          {user ? (
            <div className="flex items-center gap-3 relative" ref={dropdownRef}>
              <button className="text-gray-400 hover:text-white relative">
                🔔
              </button>
              <button onClick={toggleDropdown}>
                <img
                  src={user.profilePic || "https://i.imgur.com/4ZQZ4Z0.png"}
                  alt="Profile"
                  className="w-9 h-9 rounded-full object-cover border border-gray-500 hover:ring-2 ring-blue-400 transition"
                />
              </button>

              <div
                className={`absolute right-0 top-12 w-44 bg-[#1f2937] rounded-md shadow-xl transition-all duration-200 ease-in-out origin-top-right transform ${
                  dropdownOpen
                    ? "scale-100 opacity-100"
                    : "scale-95 opacity-0 pointer-events-none"
                }`}
              >
                <Link
                  to="/dashboard"
                  className="block px-4 py-2 text-sm text-white hover:bg-[#374151]"
                  onClick={() => setDropdownOpen(false)}
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-[#374151]"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <Link
                to="/Signup"
                className="border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white font-medium py-1 px-4 rounded-full transition duration-300 text-sm"
              >
                Signup
              </Link>
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-4 rounded-full transition duration-300 shadow-md text-sm"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile Buttons */}
        <div className="flex items-center md:hidden space-x-3 z-50">
          {!user && (
            <>
              <Link
                to="/Signup"
                className="border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white font-medium py-1 px-3 rounded-full transition duration-300 text-sm"
              >
                Signup
              </Link>
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-3 rounded-full transition duration-300 shadow-md text-sm"
              >
                Get Started
              </Link>
            </>
          )}
          <button
            className="text-gray-400 hover:text-white transition"
            onClick={toggleMobileMenu}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-64 h-full bg-[#161b22] border-l border-[#21262d] transform ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out flex flex-col p-6 z-40`}
        >
          <nav className="flex flex-col space-y-4 mt-12">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item === "Courses" ? "/courses" : "/coming-soon"}
                className="text-gray-400 hover:text-white text-lg"
                onClick={() => setMobileOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
          {!user && (
            <div className="mt-auto flex flex-col space-y-4">
              <Link
                to="/Signup"
                className="border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white font-medium py-2 px-4 rounded-full transition duration-300 text-center"
                onClick={() => setMobileOpen(false)}
              >
                Signup
              </Link>
              <Link
                to="/login"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full transition duration-300 shadow-md text-center"
                onClick={() => setMobileOpen(false)}
              >
                Get Started
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
