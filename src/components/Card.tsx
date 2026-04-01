import React from "react";

interface CardProps {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, icon, children, footer, className = "" }) => {
  return (
    <div className={`card ${className}`}>
      <div className="card__header">
        <span className="card__title">{title}</span>
        {icon && <span className="card__icon">{icon}</span>}
      </div>
      <div className="card__content">
        {children}
      </div>
      {footer && (
        <div className="card__footer">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
