import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Components/HomePage";
import SignUp from "../Components/SignUp";
import Admin from "../Components/Admin";

function AppRoutes({ signup }) {
  return (
    <div className="routes">
      <Routes>
        <Route exact path="/" element={<HomePage />} />

        <Route exact path="/signup" element={<SignUp signup={signup} />} />

        <Route exact path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default AppRoutes;
