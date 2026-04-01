import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { criticalAlerts, payrollStatus, headcountOverview, hiringPipeline, activityFeed } from "../data/mockData";

const HRDashboard: React.FC = () => {
  return (
    <div className="container">
      <div className="grid gap-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        
        {/* Critical Alerts */}
        <Card title="Critical Alerts" icon="🚨" className="alert-card">
          <div className="mt-4">
            {criticalAlerts.map(alert => (
              <div key={alert.id} className="list-item" style={{ borderLeft: `4px solid ${alert.urgency === 'high' ? 'var(--danger)' : 'var(--warning)'}`, paddingLeft: '12px' }}>
                <div className="list-item__info">
                  <p className="list-item__title">{alert.title}</p>
                  <p className="list-item__subtitle">{alert.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Button className="mt-4" style={{ width: '100%' }}>Resolve Now</Button>
        </Card>

        {/* Payroll Status */}
        <Card title="Payroll Status" icon="💸">
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold">{payrollStatus.status}</span>
              <span className="badge badge-info">Q3-2026</span>
            </div>
            <p className="text-muted" style={{ fontSize: '14px' }}>Status: <span className="font-bold">{payrollStatus.status}</span></p>
            <p className="text-muted" style={{ fontSize: '14px' }}>Issues: <span className="badge badge-danger">{payrollStatus.issues} found</span></p>
            <p className="text-muted mt-2" style={{ fontSize: '12px' }}>Next Deadline: {payrollStatus.deadline}</p>
          </div>
          <Button variant="secondary" className="mt-4" style={{ width: '100%' }}>Manage Payroll</Button>
        </Card>

        {/* Leave Approvals */}
        <Card title="Leave Approvals" icon="✅">
          <div className="mt-4 flex flex-col items-center justify-center p-4">
            <span className="text-2xl font-bold">14</span>
            <p className="text-muted" style={{ fontSize: '14px' }}>Pending HR approvals.</p>
          </div>
          <Button className="mt-4" style={{ width: '100%' }}>Approve All</Button>
        </Card>

        {/* Headcount Overview */}
        <Card title="Headcount Overview" icon="🏢">
          <div className="mt-4">
            <div className="flex items-end gap-2 mb-4">
              <span className="text-2xl font-bold">{headcountOverview.total}</span>
              <span className="badge badge-success mb-2" style={{ height: 'fit-content' }}>{headcountOverview.growth} growth</span>
            </div>
            {headcountOverview.departments.map(dept => (
              <div key={dept.name} className="flex justify-between items-center mb-2">
                <span className="text-muted" style={{ fontSize: '14px' }}>{dept.name}</span>
                <span className="font-medium" style={{ fontSize: '14px' }}>{dept.count}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Recruitment Pipeline */}
        <Card title="Recruitment Pipeline" icon="📈">
          <div className="mt-4">
            {hiringPipeline.map(item => (
              <div key={item.id} className="list-item">
                <div className="list-item__info">
                  <p className="list-item__title">{item.role}</p>
                  <p className="list-item__subtitle">{item.candidates} New Candidates</p>
                </div>
                <span className="badge-info badge">{item.stage}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Activity Feed (HR) */}
        <Card title="Activity Feed" icon="🔄">
          <div className="mt-4">
            {activityFeed.map(activity => (
              <div key={activity.id} className="list-item">
                <div className="list-item__info">
                  <p className="list-item__title">
                    <span className="font-bold">{activity.user}</span> {activity.action}
                  </p>
                  <p className="list-item__subtitle">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

      </div>
    </div>
  );
};

export default HRDashboard;
