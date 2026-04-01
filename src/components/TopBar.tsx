import React from "react";
import { User, UserRole } from "../types";

interface TopBarProps {
  user: User;
  activeRole: UserRole;
  setActiveRole: (role: UserRole) => void;
}

const TopBar: React.FC<TopBarProps> = ({ user, activeRole, setActiveRole }) => {
  return (
    <header className="top-bar" style={{ 
      height: 'var(--topbar-height)', 
      backgroundColor: 'var(--surface)', 
      borderBottom: '1px solid var(--border)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 24px',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      <div className="flex items-center gap-4">
        <h1 style={{ fontSize: '20px', fontWeight: '800', color: 'var(--primary)' }}>Trainery</h1>
        <div style={{ height: '32px', width: '1px', backgroundColor: 'var(--border)' }}></div>
        <div>
          <h2 style={{ fontSize: '16px' }}>Hi {user.name} 👋</h2>
          <p className="text-muted" style={{ fontSize: '12px' }}>{user.role}</p>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div style={{ position: 'relative' }}>
          <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}>🔍</span>
          <input 
            type="text" 
            placeholder="Search..." 
            style={{ 
              backgroundColor: 'var(--bg)', 
              border: '1px solid var(--border)', 
              borderRadius: '20px', 
              padding: '8px 16px 8px 36px',
              fontSize: '14px',
              width: '240px',
              outline: 'none'
            }} 
          />
        </div>

        <nav className="flex gap-2" style={{ backgroundColor: 'var(--bg)', padding: '4px', borderRadius: '8px' }}>
          {(["Employee", "Manager", "HR"] as UserRole[]).map(role => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              style={{
                padding: '6px 12px',
                borderRadius: '6px',
                border: 'none',
                fontSize: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                backgroundColor: activeRole === role ? 'white' : 'transparent',
                color: activeRole === role ? 'var(--primary)' : 'var(--text-secondary)',
                boxShadow: activeRole === role ? 'var(--shadow-sm)' : 'none',
                transition: 'all 0.2s'
              }}
            >
              {role}
            </button>
          ))}
        </nav>

        <img 
          src={user.avatar} 
          alt={user.name} 
          style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--primary-hover)', padding: '2px' }} 
        />
      </div>
    </header>
  );
};

export default TopBar;
