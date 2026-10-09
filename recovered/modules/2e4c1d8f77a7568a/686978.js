/* Recovered shipped factory. Module 686978.
 * Source: recovered/web/assets/2e4c1d8f77a7568a.js
 * UTF-16 property offsets: 6338..6957
 * Raw property SHA-256: a269bf342892a9c23c52af88e360512a3bb1093873e3a98c482d7570c2ab9941
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, a) {
  a.d(t, { cO: () => r, ye: () => o });
  var n = a(17928),
    i = a(73153);
  let l = new Set();
  class s extends n.Ay.PersistedStore {
    static displayName = "ServerOnboardingSetupProgressSkipStore";
    static persistKey = "ServerOnboardingSetupProgressSkippedGuildIds";
    initialize(e) {
      l = new Set(e?.skippedGuildIds ?? []);
    }
    getState() {
      return { skippedGuildIds: Array.from(l) };
    }
    isSkipped(e) {
      return l.has(e);
    }
  }
  let d = new s(i.h, {
    SERVER_ONBOARDING_SETUP_PROGRESS_SKIP: function (e) {
      let { guildId: t } = e;
      l = new Set(l).add(t);
    },
  });
  function r(e) {
    i.h.dispatch({ type: "SERVER_ONBOARDING_SETUP_PROGRESS_SKIP", guildId: e });
  }
  function o(e) {
    return (0, n.bG)([d], () => d.isSkipped(e), [e]);
  }
}
