const ALLOWED_DOMAINS = ["looop.company"] as const;

export function isAllowedDomain(email: string): boolean {
  const domain = email.split("@")[1]?.toLowerCase();
  return ALLOWED_DOMAINS.includes(domain as (typeof ALLOWED_DOMAINS)[number]);
}
