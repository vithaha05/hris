import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "sm";
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = "primary", 
  size = "md", 
  children, 
  className = "", 
  ...props 
}) => {
  const variantClass = `btn-${variant}`;
  const sizeClass = size === "sm" ? "btn-sm" : "";
  
  return (
    <button 
      className={`btn ${variantClass} ${sizeClass} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
