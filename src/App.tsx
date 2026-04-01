import React, { useState } from "react";
import "./index.css";
import TopBar from "./components/TopBar";
import EmployeeDashboard from "./dashboards/EmployeeDashboard";
import ManagerDashboard from "./dashboards/ManagerDashboard";
import HRDashboard from "./dashboards/HRDashboard";
import { currentUser } from "./data/mockData";
import { UserRole } from "./types";

function App() {
  const [activeRole, setActiveRole] = useState<UserRole>("Employee");

  const renderDashboard = () => {
    switch (activeRole) {
      case "Employee":
        return <EmployeeDashboard />;
      case "Manager":
        return <ManagerDashboard />;
      case "HR":
        return <HRDashboard />;
      default:
        return <EmployeeDashboard />;
    }
  };

  return (
    <div className="dashboard-layout">
      <TopBar 
        user={currentUser} 
        activeRole={activeRole} 
        setActiveRole={setActiveRole} 
      />
      <main className="main-content">
        <div className="container" style={{ paddingBottom: '40px' }}>
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-bold">{activeRole} Dashboard</h1>
            <p className="text-muted" style={{ fontSize: '14px' }}>Welcome back, <span className="font-bold" style={{ color: 'var(--text-primary)' }}>{currentUser.name}</span></p>
          </div>
          {renderDashboard()}
        </div>
      </main>
    </div>
  );
}

export default App;
