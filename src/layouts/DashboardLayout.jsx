import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`h-screen grid grid-rows-[auto_1fr] transition-all duration-300`}
      style={{
        gridTemplateColumns: isCollapsed ? "4rem 1fr" : "16rem 1fr", // Dynamic Width Adjustment
      }}
    >
      {/* Sidebar */}
      <div className="row-span-2 text-white">
        <Sidebar isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
      </div>

      {/* Header */}
      <div className="bg-white shadow-md p-4">
        <Header />
      </div>

      {/* Main Content */}
      <div className="p-6 bg-gray-100 overflow-auto">{children}</div>
    </div>
  );
};

export default DashboardLayout;
