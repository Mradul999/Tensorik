import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-[#1f2937] text-gray-400 text-center">
      <div className="container mx-auto">
        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
          </a>
          <a
            href="https://x.com/Tensorik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} className="text-xl" />
          </a>
          <a
            href=" https://www.linkedin.com/company/tensorik"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
          </a>
          <a
            href="https://www.instagram.com/tensorik.official"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-xl" />
          </a>
        </div>

        {/* Email */}
        <p className="mb-2">
          Email:{" "}
          <a
            href="mailto:officialtensorik@gmail.com"
            className="hover:text-white transition duration-300"
          >
            officialtensorik@gmail.com
          </a>
        </p>

        {/* Links */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm mb-2">
          <Link
            to="/privacy-policy"
            className="hover:text-white transition duration-300 underline"
          >
            Privacy Policy
          </Link>
          <span className="hidden md:inline">|</span>
          <Link
            to="/terms-of-service"
            className="hover:text-white transition duration-300 underline"
          >
            Terms of Service
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs">
          &copy; 2025 Tensorik. Made with <FontAwesomeIcon icon={faLightbulb} />{" "}
          by Team Tensorik
        </p>
      </div>
    </footer>
  );
};

export default Footer;
