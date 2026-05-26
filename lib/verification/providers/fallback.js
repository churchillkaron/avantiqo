export function fallbackVerification(payload) {
  return {
    success: true,
    provider: "fallback",

    legalCompanyName:
      payload.legalCompanyName || "",

    companyNumber:
      payload.registrationNumber || "",

    currentStatus: "manual_review_required",

    registeredAddress:
      payload.legalAddress || "",

    manualReview: true,
  };
}
