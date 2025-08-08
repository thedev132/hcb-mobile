import User from "./types/User";

export function nameParts(name: string) {
  const parts = name.split(" ");
  return {
    firstName: parts[0],
    lastName: parts.length > 1 ? parts[parts.length - 1] : null,
  };
}

export function userInitials(name: string) {
  const { firstName, lastName } = nameParts(name);
  return firstName[0] + (lastName ? lastName[0] : "");
}

export function userColor(id: User["id"]) {
  const colors = [
    "#ec3750",
    "#ff8c37",
    "#f1c40f",
    "#33d6a6",
    "#5bc0de",
    "#338eda",
  ];
  return colors[id.charCodeAt(4) % colors.length];
}

// Permission helper functions for role-based access control
export function isAdmin(user: User | null | undefined): boolean {
  return Boolean(user?.admin);
}

export function isAuditor(user: User | null | undefined): boolean {
  return Boolean(user?.auditor);
}

export function hasReadAccess(user: User | null | undefined): boolean {
  return isAdmin(user) || isAuditor(user);
}
