import React, { useState } from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import Modal from "../components/Modal";
import LeaveForm from "../components/LeaveForm";
import LeaveBalanceCard from "../components/LeaveBalanceCard";
import { todayTasks, leaveBalance as initialLeaveBalance, performanceData, currentUser } from "../data/mockData";
import type { LeaveRequestInput, LeaveRecord } from "../types";

const EmployeeDashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [leaveRequests, setLeaveRequests] = useState<LeaveRecord[]>([
    { 
      id: "prev-1", 
      name: currentUser.name, 
      avatar: currentUser.avatar, 
      type: "Annual Leave", 
      startDate: "2026-03-10", 
      endDate: "2026-03-12", 
      status: "Approved" 
    }
  ]);
  const [balance] = useState(initialLeaveBalance);

  const handleApplyLeave = () => {
    setIsModalOpen(true);
  };

  const handleFormSubmit = (data: LeaveRequestInput) => {
    const newRequest: LeaveRecord = {
      id: `lr-${Date.now()}`,
      name: currentUser.name,
      avatar: currentUser.avatar,
      type: "Annual Leave",
      startDate: data.startDate,
      endDate: data.endDate,
      status: "Pending"
    };

    setLeaveRequests([newRequest, ...leaveRequests]);
    setIsModalOpen(false);
    setShowToast(true);
    
    // Auto-hide toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

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

        {/* Leave Balance Section */}
        <LeaveBalanceCard 
          remaining={balance.remaining} 
          total={balance.total} 
          onApplyLeave={handleApplyLeave} 
        />

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

        {/* Leave History (Optional but requested) */}
        <Card title="Recent Leave Requests" icon="📋">
          <div className="mt-4">
            {leaveRequests.length === 0 ? (
              <p className="text-muted" style={{ fontSize: '14px', textAlign: 'center', padding: '20px' }}>No leave requests yet.</p>
            ) : (
              leaveRequests.map(request => (
                <div key={request.id} className="list-item">
                  <div className="list-item__info">
                    <p className="list-item__title">{request.type}</p>
                    <p className="list-item__subtitle">{request.startDate} to {request.endDate}</p>
                  </div>
                  <span className={`badge ${request.status === 'Approved' ? 'badge-success' : 'badge-warning'}`}>
                    {request.status}
                  </span>
                </div>
              ))
            )}
          </div>
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
      </div>

      {/* Leave Application Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Apply for Leave"
      >
        <LeaveForm 
          onSubmit={handleFormSubmit} 
          onCancel={() => setIsModalOpen(false)} 
        />
      </Modal>

      {/* Confirmation Toast */}
      {showToast && (
        <div className="toast">
          <span>✅ Leave Request Submitted Successfully</span>
        </div>
      )}
    </div>
  );
};

export default EmployeeDashboard;
