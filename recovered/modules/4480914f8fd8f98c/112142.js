/* Recovered shipped factory. Module 112142.
 * Source: recovered/web/assets/4480914f8fd8f98c.js
 * UTF-16 property offsets: 95..1073
 * Raw property SHA-256: dd045bccf153f521fb1776b18de8fe8ba2604de80eae8e4f3b1b5984fafeffef
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, e, n) {
  n.d(e, { t: () => r });
  var s = n(945810),
    i = n(79545);
  let r = (0, s.mj)({
    name: "2025-12-quest-cta-refactor-rollout",
    kind: "user",
    defaultConfig: { enabled: !1, enabledQuestStates: new Set() },
    variations: {
      1: { enabled: !0, enabledQuestStates: new Set([i.UA.UNENROLLED]) },
      2: { enabled: !0, enabledQuestStates: new Set([i.UA.UNENROLLED, i.UA.ENROLLED]) },
      3: {
        enabled: !0,
        enabledQuestStates: new Set([i.UA.UNENROLLED, i.UA.ENROLLED, i.UA.INCOMPLETE]),
      },
      4: {
        enabled: !0,
        enabledQuestStates: new Set([
          i.UA.UNENROLLED,
          i.UA.ENROLLED,
          i.UA.INCOMPLETE,
          i.UA.COMPLETED,
        ]),
      },
      5: {
        enabled: !0,
        enabledQuestStates: new Set([
          i.UA.UNENROLLED,
          i.UA.ENROLLED,
          i.UA.INCOMPLETE,
          i.UA.COMPLETED,
          i.UA.CLAIMED,
        ]),
      },
      6: {
        enabled: !0,
        enabledQuestStates: new Set([
          i.UA.UNENROLLED,
          i.UA.ENROLLED,
          i.UA.INCOMPLETE,
          i.UA.COMPLETED,
          i.UA.CLAIMED,
          i.UA.EXPIRED,
          i.UA.EXPIRED_CLAIMED,
        ]),
      },
      7: {
        enabled: !0,
        enabledQuestStates: new Set([
          i.UA.UNENROLLED,
          i.UA.ENROLLED,
          i.UA.INCOMPLETE,
          i.UA.COMPLETED,
          i.UA.CLAIMED,
          i.UA.EXPIRED,
          i.UA.EXPIRED_CLAIMABLE,
          i.UA.EXPIRED_CLAIMED,
        ]),
      },
    },
  });
}
