function normalizeDomain(value = "") {
  return value
    .replace("https://", "")
    .replace("http://", "")
    .replace("www.", "")
    .split("/")[0]
    .toLowerCase()
    .trim();
}

function isFreeEmail(email = "") {
  const freeDomains = [
    "gmail.com",
    "hotmail.com",
    "yahoo.com",
    "outlook.com",
    "icloud.com",
  ];

  const domain = email.split("@")[1]?.toLowerCase();

  return freeDomains.includes(domain);
}

function calculateTrustScore(payload) {
  let score = 0;

  const emailDomain =
    payload.businessEmail?.split("@")[1]?.toLowerCase() || "";

  const websiteDomain = normalizeDomain(
    payload.website || ""
  );

  if (
    emailDomain &&
    websiteDomain &&
    emailDomain === websiteDomain
  ) {
    score += 30;
  }

  if (payload.emailVerified) {
    score += 20;
  }

  if (payload.smsVerified) {
    score += 20;
  }

  if (payload.taxId) {
    score += 10;
  }

  if (payload.registrationNumber) {
    score += 10;
  }

  if (
    payload.website &&
    payload.website.includes(".")
  ) {
    score += 10;
  }

  if (
    payload.businessEmail &&
    !isFreeEmail(payload.businessEmail)
  ) {
    score += 10;
  }

  return Math.min(score, 100);
}

export async function verifyCompany(payload) {
  const trustScore =
    calculateTrustScore(payload);

  const emailDomain =
    payload.businessEmail?.split("@")[1] || "";

  const websiteDomain = normalizeDomain(
    payload.website || ""
  );

  const domainMatch =
    emailDomain.toLowerCase() ===
    websiteDomain.toLowerCase();

  return {
    success: true,

    verificationType: "trust_scoring",

    legalCompanyName:
      payload.legalCompanyName || "",

    operatingName:
      payload.operatingName || "",

    registrationNumber:
      payload.registrationNumber || "",

    taxId: payload.taxId || "",

    trustScore,

    verificationStatus:
      trustScore >= 70
        ? "high_confidence"
        : trustScore >= 40
        ? "medium_confidence"
        : "manual_review_required",

    checks: {
      domainMatch,
      emailVerified:
        payload.emailVerified || false,
      smsVerified:
        payload.smsVerified || false,
      hasTaxId: !!payload.taxId,
      hasWebsite: !!payload.website,
      businessEmail:
        !isFreeEmail(payload.businessEmail),
    },
  };
}
