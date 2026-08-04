export interface JwtParts {
  header: Record<string, unknown>;
  payload: Record<string, unknown>;
  signature: string;
  isExpired: boolean;
  expiresAt: string | null;
  issuedAt: string | null;
}

function base64UrlDecode(str: string): string {
  const b64 = str.replace(/-/g, "+").replace(/_/g, "/");
  const padded = b64.padEnd(b64.length + ((4 - (b64.length % 4)) % 4), "=");
  return decodeURIComponent(
    atob(padded)
      .split("")
      .map((c) => "%" + c.charCodeAt(0).toString(16).padStart(2, "0"))
      .join("")
  );
}

export function decodeJwt(token: string): JwtParts {
  const parts = token.trim().split(".");
  if (parts.length !== 3) throw new Error("Token must have 3 parts separated by dots.");

  const header = JSON.parse(base64UrlDecode(parts[0]));
  const payload = JSON.parse(base64UrlDecode(parts[1]));
  const signature = parts[2];

  const exp = payload.exp as number | undefined;
  const iat = payload.iat as number | undefined;

  return {
    header,
    payload,
    signature,
    isExpired: exp ? Date.now() >= exp * 1000 : false,
    expiresAt: exp ? new Date(exp * 1000).toLocaleString() : null,
    issuedAt: iat ? new Date(iat * 1000).toLocaleString() : null,
  };
}

export function validateJwtInput(token: string): string | null {
  if (!token.trim()) return "Please paste a JWT token.";
  if (token.trim().split(".").length !== 3) return "Invalid JWT format — expected 3 dot-separated parts.";
  return null;
}

export function copyJwtSummary(token: string, parts: JwtParts): string {
  return `JWT Decode Summary

Token:
${token}

Header:
${JSON.stringify(parts.header, null, 2)}

Payload:
${JSON.stringify(parts.payload, null, 2)}

Issued At: ${parts.issuedAt ?? "N/A"}
Expires At: ${parts.expiresAt ?? "N/A"}
Status: ${parts.isExpired ? "Expired" : "Valid"}`.trim();
}