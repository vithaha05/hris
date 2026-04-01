import React from "react";
import Card from "./Card";
import Button from "./Button";

interface LeaveBalanceCardProps {
  remaining: number;
  total: number;
  onApplyLeave: () => void;
}

const LeaveBalanceCard: React.FC<LeaveBalanceCardProps> = ({ remaining, total, onApplyLeave }) => {
  const percentage = (remaining / total) * 100;
  
  return (
    <Card title="Leave Balance" icon="🏖️">
      <div className="mt-4">
        <p className="form-label" style={{ marginBottom: '4px' }}>AVAILABLE DAYS</p>
        <div className="flex items-end gap-2 mb-2">
          <span className="text-2xl font-bold">{remaining}</span>
          <span className="text-muted font-medium mb-1">/ {total} days</span>
        </div>
        
        <div className="progress-container" style={{ margin: '16px 0' }}>
          <div 
            className="progress-bar" 
            style={{ 
              width: `${percentage}%`,
              backgroundColor: percentage < 25 ? 'var(--danger)' : 'var(--success)'
            }}
          ></div>
        </div>
        
        <Button 
          onClick={onApplyLeave} 
          style={{ 
            width: '100%', 
            backgroundColor: '#10B981', /* Matching the Green in Figma */
            color: 'white',
            marginTop: '8px'
          }}
        >
          Apply Leave
        </Button>
      </div>
    </Card>
  );
};

export default LeaveBalanceCard;
