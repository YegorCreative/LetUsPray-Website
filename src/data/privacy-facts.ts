/**
 * Verified Version 1 implementation facts for a future Privacy Policy.
 *
 * This module is not public-facing copy. Do not render it as legal language.
 * Final privacy wording requires owner approval after the iOS audit is complete.
 */
export const privacyFacts = {
  status: 'internal-record-only',
  guestUse: {
    accountRequired: false,
    localFirst: true,
    prayerProgressPersistsLocally: true,
  },
  platforms: ['iPhone', 'iPad'] as const,
  authentication: {
    optional: true,
    providers: ['Sign in with Apple', 'Sign in with Google'] as const,
  },
  synchronization: {
    required: false,
    provider: 'Supabase',
    whenAuthenticatedAndSyncRunsReceives: [
      'user identifier',
      'active prayer plan identifier',
      'completed days by plan',
      'saved verse/prayer identifiers and records',
      'per-verse journal entries',
      'streak information',
      'completion dates',
      'update timestamps',
    ] as const,
  },
  advertisingAndTracking: {
    advertisingSdksFoundInVerifiedV1: false,
    behavioralAnalyticsSdksFoundInVerifiedV1: false,
  },
} as const;
