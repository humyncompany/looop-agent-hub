export const ROLES = {
  ADMIN: "admin",
  EMPLOYEE: "employee",
} as const;

export type Role = (typeof ROLES)[keyof typeof ROLES];

export const AGENT_STATUS = {
  ONLINE: "online",
  DEGRADED: "degraded",
  OFFLINE: "offline",
} as const;

export type AgentStatus =
  (typeof AGENT_STATUS)[keyof typeof AGENT_STATUS];

export const FEEDBACK_TYPES = {
  ERROR: "error",
  SUGGESTION: "suggestion",
  COMPLIMENT: "compliment",
} as const;

export type FeedbackType =
  (typeof FEEDBACK_TYPES)[keyof typeof FEEDBACK_TYPES];
