import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Main pages
import Home from "./pages/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ComingSoon from "./components/ComingSoon";
import WorkshopRegistration from "./components/WorkshopRegistration";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";

// Dashboard & inner pages
import Dashboard from "./components/Dashboard";
import EditProfile from "./components/EditProfile";
import Saved from "./components/Saved";

import ScrollToTop from "./components/ScrollToTop";

// ✅ Import ChatBot
import ChatBot from "./components/ChatBot";
import VerifyOtp from "./pages/VerifyOtp";
import ForgetPassWord from "./pages/ForgetPassWord";
import ResetPassword from "./pages/ResetPassword";

// Refresh AOS on every route change
const AOSRefreshOnRouteChange = () => {
  const location = useLocation();
  useEffect(() => {
    AOS.refresh();
  }, [location.pathname]);
  return null;
};

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <Router>
      <ScrollToTop />
      <AOSRefreshOnRouteChange />
      <div className="overflow-x-hidden">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/workshop-register" element={<WorkshopRegistration />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />

          {/* Dashboard Pages */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/edit" element={<EditProfile />} />
          <Route path="/dashboard/saved" element={<Saved />} />

          <Route path="/verify-otp" element={<VerifyOtp />}></Route>
          <Route path="/forgot-password" element={<ForgetPassWord />}></Route>
          <Route path="/reset-password/" element={<ResetPassword />}></Route>
        </Routes>

        {/* ✅ Global ChatBot that appears on all routes */}
        <ChatBot />
      </div>
    </Router>
  );
}

export default App;
