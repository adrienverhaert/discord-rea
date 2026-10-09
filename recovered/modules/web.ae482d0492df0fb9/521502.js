/* Recovered shipped factory. Module 521502.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3138539..3139530
 * Raw property SHA-256: 46f3dafb4a335b0dffa7711845b8f3c82661acd529fab4857d7cc73b6b690c5f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => _, U: () => l });
  var i,
    r = n(17928),
    a = n(73153),
    s = n(380610),
    l =
      (((i = {})[(i.NotResolved = 0)] = "NotResolved"),
      (i[(i.Resolving = 1)] = "Resolving"),
      (i[(i.Resolved = 2)] = "Resolved"),
      (i[(i.Invalid = 3)] = "Invalid"),
      i);
  let o = 0,
    d = null,
    c = {};
  class u extends r.Ay.Store {
    static displayName = "BuildOverrideStore";
    getCurrentBuildOverride() {
      return (
        0 === o &&
          ((o = 1),
          (0, s.bD)().then((e) => {
            a.h.dispatch({ type: "CURRENT_BUILD_OVERRIDE_RESOLVED", overrides: e });
          })),
        { state: o, overrides: d }
      );
    }
    getBuildOverride(e) {
      return (
        !(function (e) {
          if (e in c) return;
          let t = (0, s.qU)(e);
          if (null == t) {
            c = { ...c, [e]: { url: e, state: 3 } };
            return;
          }
          ((c = {
            ...c,
            [e]: { url: e, validatedURL: t.url, payload: String(t.payload), state: 1 },
          }),
            (0, s.k9)(t.url).then((t) => {
              a.h.dispatch({ type: "BUILD_OVERRIDE_RESOLVED", url: e, override: t });
            }));
        })(e),
        c[e]
      );
    }
    getBuildOverrides() {
      return c;
    }
  }
  let _ = new u(a.h, {
    BUILD_OVERRIDE_RESOLVED: function (e) {
      let { url: t, override: n } = e;
      c = { ...c, [t]: { ...c[t], state: null == n ? 3 : 2, override: n } };
    },
    CURRENT_BUILD_OVERRIDE_RESOLVED: function (e) {
      let { overrides: t } = e;
      ((o = 2), (d = t));
    },
  });
}
