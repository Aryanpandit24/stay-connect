import React from "react";
import { Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import Homestays from "./pages/Homestays";
import StayDetails from "./pages/StayDetails";
import Profile from "./pages/Profile";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import AdminProtectedRoute from "./components/AdminProtectedRoute";



function App() {
  return (
    <Routes>
      
      {/* PUBLIC PAGES */}
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* PROTECTED PAGES */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/homestays"
        element={
          <ProtectedRoute>
            <Homestays />
          </ProtectedRoute>
        }
      />

      <Route
        path="/homestays/:id"
        element={
          <ProtectedRoute>
            <StayDetails />
          </ProtectedRoute>
        }
      />

      <Route path="/profile" element={<Profile />} />

    <Route path="/admin-login" element={<AdminLogin />} />

<Route
  path="/admin"
  element={
    <AdminProtectedRoute>
      <AdminDashboard />
    </AdminProtectedRoute>
  }
/>

    </Routes>
  );
}

export default App;
