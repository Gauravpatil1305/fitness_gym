import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../components/Dashboard/Shared/Topbar";
import Sidebar from "../components/Dashboard/Shared/Sidebar";
import AddUser from "../components/Dashboard/AddUser/AddUser";
import ViewMeal from "../components/Dashboard/ViewMeal/ViewMeal";
import ViewRoutine from "../components/Dashboard/ViewRoutine/ViewRutine";

const Dashboard = () => {
  // handel sidebar
  const [sidebar, setSidebar] = useState(false);

  return (
    <div
      className="overflow-hidden h-screen"
      style={{ fontFamily: "'Lexend', sans-serif" }}
    >
      <Topbar sidebar={sidebar} setSidebar={setSidebar}></Topbar>
      <div className="mt-[60px] flex">
        <Sidebar sidebar={sidebar}></Sidebar>
        <div className="overflow-scroll bg-[#fff2f2] w-full px-4 py-6">
          <Outlet></Outlet>
        </div>{" "}
      </div>
      {/* Modals */}
      <AddUser></AddUser>
      <ViewMeal></ViewMeal>
      <ViewRoutine></ViewRoutine>
    </div>
  );
};

export default Dashboard;
