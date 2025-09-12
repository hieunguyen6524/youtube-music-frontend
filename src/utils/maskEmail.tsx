export function maskEmail(email: string): string {
  const [local, domain] = email.split("@"); // tách phần tên và phần domain
  if (!domain) return email; // không phải email hợp lệ

  // Ẩn bớt phần local (trước @)
  const firstChar = local[0];
  const lastChar = local[local.length - 1];
  const maskedLocal =
    local.length > 2
      ? firstChar + "*".repeat(local.length - 2) + lastChar
      : local[0] + "*";

  // Ẩn bớt phần domain (sau @)
  const [domainName, domainExt] = domain.split(".");
  const maskedDomain =
    domainName[0] + "*" + domainName[domainName.length - 1] + "." + domainExt;

  return `${maskedLocal}@${maskedDomain}`;
}
