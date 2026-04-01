import type { Alert, Activity, HiringRole, Task, LeaveRecord, User, PerformanceData } from "../types";

export const currentUser: User = {
  id: "u1",
  name: "Vithaha",
  role: "Senior Product Designer",
  roleType: "Employee",
  avatar: "https://i.pravatar.cc/150?u=vithaha",
};

export const employees: User[] = [
  { id: "u2", name: "Sarah Connor", role: "Frontend Developer", roleType: "Employee", avatar: "https://i.pravatar.cc/150?u=sarah" },
  { id: "u3", name: "John Wick", role: "Backend Architect", roleType: "Employee", avatar: "https://i.pravatar.cc/150?u=john" },
  { id: "u4", name: "Ellen Ripley", role: "UX Researcher", roleType: "Employee", avatar: "https://i.pravatar.cc/150?u=ellen" },
];

export const todayTasks: Task[] = [
  { id: "t1", title: "Complete design system handoff", completed: false, status: "urgency" },
  { id: "t2", title: "Quarterly review with manager", completed: true, status: "normal" },
  { id: "t3", title: "Update prototype for PR view", completed: false, status: "pending" },
];

export const leaveBalance = {
  remaining: 12,
  total: 24,
  used: 12,
};

export const performanceData: PerformanceData = {
  score: 88,
  status: "Exceeds Expectations",
  nextReview: "May 15, 2026",
};

export const teamLeaves: LeaveRecord[] = [
  { id: "l1", name: "Sarah Connor", avatar: "https://i.pravatar.cc/150?u=sarah", type: "Sick Leave", startDate: "Apr 02", endDate: "Apr 03", status: "On Leave" },
  { id: "l2", name: "John Wick", avatar: "https://i.pravatar.cc/150?u=john", type: "Annual Leave", startDate: "Apr 02", endDate: "Apr 10", status: "On Leave" },
];

export const pendingReviews = 4;

export const hiringPipeline: HiringRole[] = [
  { id: "h1", role: "Junior UI Designer", candidates: 12, stage: "Interviews" },
  { id: "h2", role: "DevOps Engineer", candidates: 5, stage: "Screening" },
];

export const activityFeed: Activity[] = [
  { id: "a1", user: "John Wick", action: "applied for Annual Leave", time: "2 hours ago", type: "leave" },
  { id: "a2", user: "HR System", action: "scheduled team performance review", time: "5 hours ago", type: "review" },
  { id: "a3", user: "Recruitment", action: "new candidate for DevOps role", time: "1 day ago", type: "hiring" },
];

export const criticalAlerts: Alert[] = [
  { id: "al1", title: "Payroll Discrepancy", description: "3 employees have mismatched tax records for April.", urgency: "high" },
  { id: "al2", title: "Visa Expiry", description: "Ellen Ripley's work visa expires in 30 days.", urgency: "medium" },
];

export const payrollStatus = {
  status: "Processing",
  issues: 2,
  deadline: "Apr 28, 2026",
};

export const headcountOverview = {
  total: 156,
  growth: "+4.2%",
  departments: [
    { name: "Engineering", count: 82 },
    { name: "Design", count: 24 },
    { name: "Marketing", count: 50 },
  ],
};
