import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { todayTasks, leaveBalance, performanceData } from "../data/mockData";

const EmployeeDashboard: React.FC = () => {
  return (
    <div className="container">
      <div className="grid gap-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        
        {/* Today's Tasks */}
        <Card title="Today's Tasks" icon="✅">
          <div className="mt-4">
            {todayTasks.map(task => (
              <div key={task.id} className="list-item">
                <input 
                  type="checkbox" 
                  checked={task.completed} 
                  readOnly 
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                />
                <div className="list-item__info">
                  <span className={`list-item__title ${task.completed ? 'text-muted' : ''}`} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                    {task.title}
                  </span>
                </div>
                {task.status === 'urgency' && <span className="badge badge-danger">Urgent</span>}
              </div>
            ))}
          </div>
          <Button variant="secondary" size="sm" className="mt-4" style={{ width: '100%' }}>View All Tasks</Button>
        </Card>

        {/* Leave Balance */}
        <Card title="Leave Balance" icon="🏖️">
          <div className="mt-4 flex items-center justify-between">
            <div>
              <span className="text-2xl font-bold">{leaveBalance.remaining}</span>
              <span className="text-muted ml-1">Days</span>
            </div>
            <div className="text-right">
              <div className="text-muted" style={{ fontSize: '12px' }}>Total: {leaveBalance.total}</div>
              <div className="text-muted" style={{ fontSize: '12px' }}>Used: {leaveBalance.used}</div>
            </div>
          </div>
          <div className="progress-container mt-4">
            <div 
              className="progress-bar" 
              style={{ width: `${(leaveBalance.used / leaveBalance.total) * 100}%` }}
            ></div>
          </div>
          <Button className="mt-4" style={{ width: '100%' }}>Apply Leave</Button>
        </Card>

        {/* Payslip */}
        <Card title="Payslip" icon="💰">
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold">March 2026</span>
              <span className="badge badge-success">Paid</span>
            </div>
            <p className="text-muted mt-2" style={{ fontSize: '14px' }}>Your payslip for the last month is available for download.</p>
          </div>
          <Button variant="secondary" className="mt-4" style={{ width: '100%' }}>View Payslip</Button>
        </Card>

        {/* Performance */}
        <Card title="Performance" icon="📈">
          <div className="mt-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-muted" style={{ fontSize: '14px' }}>Current Score</span>
              <span className="font-bold">{performanceData.score}%</span>
            </div>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: `${performanceData.score}%` }}></div>
            </div>
            <p className="mt-2 font-medium" style={{ fontSize: '14px' }}>Status: <span className="badge badge-info">{performanceData.status}</span></p>
            <p className="text-muted" style={{ fontSize: '12px' }}>Next Review: {performanceData.nextReview}</p>
          </div>
          <Button variant="secondary" size="sm" className="mt-4" style={{ width: '100%' }}>Detailed Report</Button>
        </Card>

        {/* Notifications */}
        <Card title="Notifications" icon="🔔">
          <div className="mt-4">
            <div className="list-item">
              <div className="list-item__info">
                <p className="list-item__title">Policy Update</p>
                <p className="list-item__subtitle">New remote work guidelines posted.</p>
              </div>
              <span className="text-muted" style={{ fontSize: '10px' }}>2h ago</span>
            </div>
            <div className="list-item">
              <div className="list-item__info">
                <p className="list-item__title">System Maintenance</p>
                <p className="list-item__subtitle">Scheduled for Saturday midnight.</p>
              </div>
              <span className="text-muted" style={{ fontSize: '10px' }}>1d ago</span>
            </div>
          </div>
        </Card>

        {/* Calendar */}
        <Card title="Calendar" icon="🗓️">
          <div className="mt-4">
            <div className="flex gap-2" style={{ overflowX: 'auto', paddingBottom: '8px' }}>
              {[1, 2, 3, 4, 5].map(day => (
                <div key={day} className={`flex flex-col items-center justify-center`} style={{ 
                  minWidth: '48px', 
                  height: '64px', 
                  borderRadius: '12px',
                  backgroundColor: day === 2 ? 'var(--primary)' : 'var(--bg)',
                  color: day === 2 ? 'white' : 'inherit',
                  border: '1px solid var(--border)'
                }}>
                  <span style={{ fontSize: '12px' }}>Apr</span>
                  <span style={{ fontSize: '18px', fontWeight: '700' }}>0{day}</span>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <p className="font-medium" style={{ fontSize: '14px' }}>Upcoming Event:</p>
              <p className="text-muted" style={{ fontSize: '12px' }}>Design Workshop (2:00 PM)</p>
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
};

export default EmployeeDashboard;
