/* Recovered shipped factory. Module 600623.
 * Source: recovered/web/assets/2e4c1d8f77a7568a.js
 * UTF-16 property offsets: 5679..6337
 * Raw property SHA-256: 334c9a692b54295db7f5ae3f9585eee24d52dc25cd8a55748d600b41dd753ac5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, a) {
  a.d(t, { Nt: () => o, vy: () => r });
  var n = a(17928),
    i = a(73153);
  let l = new Set();
  class s extends n.Ay.PersistedStore {
    static displayName = "ServerOnboardingSetupProgressCompletionStore";
    static persistKey = "ServerOnboardingSetupProgressCompletedGuildIds";
    initialize(e) {
      l = new Set(e?.completedGuildIds ?? []);
    }
    getState() {
      return { completedGuildIds: Array.from(l) };
    }
    isComplete(e) {
      return l.has(e);
    }
  }
  let d = new s(i.h, {
    SERVER_ONBOARDING_SETUP_PROGRESS_COMPLETE: function (e) {
      let { guildId: t } = e;
      l = new Set(l).add(t);
    },
  });
  function r(e) {
    d.isComplete(e) ||
      i.h.dispatch({ type: "SERVER_ONBOARDING_SETUP_PROGRESS_COMPLETE", guildId: e });
  }
  function o(e) {
    return (0, n.bG)([d], () => d.isComplete(e), [e]);
  }
}
