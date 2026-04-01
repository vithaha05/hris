// types/index.ts
// Centralised TypeScript types used across the dashboard.

export type UserRole = "Employee" | "Manager" | "HR";

export interface User {
  id: string;
  name: string;
  role: string;
  roleType: UserRole;
  avatar: string;
}

export interface Task {
  id: string;
  title: string;
  completed: boolean;
  status: "pending" | "urgency" | "normal";
}

export interface LeaveRecord {
  id: string;
  name: string;
  avatar: string;
  type: string;
  startDate: string;
  endDate: string;
  status: "Approved" | "Pending" | "On Leave";
}

export interface Activity {
  id: string;
  user: string;
  action: string;
  time: string;
  type: "leave" | "review" | "hiring" | "alert";
}

export interface HiringRole {
  id: string;
  role: string;
  candidates: number;
  stage: string;
}

export interface PerformanceData {
  score: number;
  status: string;
  nextReview: string;
}

export interface Alert {
  id: string;
  title: string;
  description: string;
  urgency: "high" | "medium" | "low";
}
