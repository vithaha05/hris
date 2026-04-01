import React from "react";
import Card from "../components/Card";
import Button from "../components/Button";
import { teamLeaves, pendingReviews, hiringPipeline, activityFeed } from "../data/mockData";

const ManagerDashboard: React.FC = () => {
  return (
    <div className="container">
      <div className="grid gap-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        
        {/* Team on Leave Today */}
        <Card title="Team on Leave Today" icon="🏖️">
          <div className="mt-4">
            {teamLeaves.map(leave => (
              <div key={leave.id} className="list-item">
                <img src={leave.avatar} alt={leave.name} className="list-item__avatar" />
                <div className="list-item__info">
                  <p className="list-item__title">{leave.name}</p>
                  <p className="list-item__subtitle">{leave.type} · {leave.startDate} - {leave.endDate}</p>
                </div>
                <span className="badge badge-warning">On Leave</span>
              </div>
            ))}
          </div>
          <Button variant="secondary" size="sm" className="mt-4" style={{ width: '100%' }}>View All Leave</Button>
        </Card>

        {/* Pending Reviews */}
        <Card title="Pending Reviews" icon="📝">
          <div className="mt-4 flex flex-col items-center justify-center p-4">
            <span className="text-2xl font-bold">{pendingReviews}</span>
            <p className="text-muted" style={{ fontSize: '14px' }}>Team reviews pending action.</p>
          </div>
          <Button className="mt-4" style={{ width: '100%' }}>Start Review</Button>
        </Card>

        {/* Hiring Pipeline */}
        <Card title="Hiring Pipeline" icon="💼">
          <div className="mt-4">
            {hiringPipeline.map(item => (
              <div key={item.id} className="list-item">
                <div className="list-item__info">
                  <p className="list-item__title">{item.role}</p>
                  <p className="list-item__subtitle">{item.candidates} Candidates · {item.stage}</p>
                </div>
                <span className="badge badge-info">{item.stage}</span>
              </div>
            ))}
          </div>
          <Button variant="secondary" size="sm" className="mt-4" style={{ width: '100%' }}>Manage Roles</Button>
        </Card>

        {/* Team Performance */}
        <Card title="Team Performance" icon="📊">
          <div className="mt-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-muted" style={{ fontSize: '14px' }}>Overall Progress</span>
              <span className="font-bold">82%</span>
            </div>
            <div className="progress-container">
              <div className="progress-bar" style={{ width: '82%', backgroundColor: 'var(--success)' }}></div>
            </div>
            <div className="mt-4">
              <div className="list-item">
                <span style={{ fontSize: '14px' }}>Engineering</span>
                <span className="badge badge-success">On Track</span>
              </div>
              <div className="list-item">
                <span style={{ fontSize: '14px' }}>Product</span>
                <span className="badge badge-success">On Track</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Activity Feed */}
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

        {/* Calendar (Manager) */}
        <Card title="Calendar" icon="🗓️">
          <div className="mt-4">
            <div className="list-item">
              <div className="list-item__info">
                <p className="list-item__title">1:1 with Sarah</p>
                <p className="list-item__subtitle">April 02 · 10:30 AM</p>
              </div>
            </div>
            <div className="list-item">
              <div className="list-item__info">
                <p className="list-item__title">Sprint Planning</p>
                <p className="list-item__subtitle">April 02 · 1:00 PM</p>
              </div>
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
};

export default ManagerDashboard;
