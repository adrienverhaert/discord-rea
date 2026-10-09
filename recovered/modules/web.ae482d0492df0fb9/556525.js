/* Recovered shipped factory. Module 556525.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3199911..3200985
 * Raw property SHA-256: 77e5e5ade252b8452a12dfee855b0a7438a2db8a9a034a406cb92ce2ef1143d0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { O: () => d, v: () => c });
  var i,
    r = n(582128),
    a = n(17928),
    s = n(775602),
    l = n(531685);
  function o(e, t) {
    return 0.5 + (t - 0.5) / (1 + Math.exp(-0.03 * (e - -45)));
  }
  var d =
    (((i = {}).BOTH = "BOTH"), (i.INSET_ONLY = "INSET_ONLY"), (i.OUTSET_ONLY = "OUTSET_ONLY"), i);
  function c(e) {
    let {
        isSpeaking: t,
        voiceDb: i,
        spreadDirection: d = "BOTH",
        maxOuterSpreadRadius: c = 3,
        maxInnerSpreadRadius: u = 1,
        hideIfVolumeMissing: _ = !1,
      } = e,
      E = n(773371).default,
      {
        shouldReduceMotion: A,
        useForcedColors: h,
        isAppFocusedOrOverlayVisible: f,
      } = (0, a.cf)([s.Ay, l.A, E], () => ({
        shouldReduceMotion: s.Ay.useReducedMotion,
        useForcedColors: s.Ay.useForcedColors,
        isAppFocusedOrOverlayVisible: l.A.isAppFocused() || null != E.getFocusedPID(),
      }));
    return r.useMemo(() => {
      let e = {};
      if (i === -1 / 0 && _) return e;
      if (t) {
        let t = 0,
          n = 2,
          r = 3;
        i !== -1 / 0 &&
          !A &&
          f &&
          ((t = "INSET_ONLY" === d ? 0 : o(i, c)),
          (n = "OUTSET_ONLY" === d ? 0 : o(i, u)),
          (r = "OUTSET_ONLY" === d ? 0 : n + 1));
        let a = h ? "Highlight" : "var(--status-speaking)";
        e.boxShadow = `0 0 0 ${t}px ${a}, inset 0 0 0 ${n}px ${a}, inset 0 0 0 ${r}px var(--background-base-lower)`;
      }
      return (f && (e.transition = "box-shadow 50ms ease-out"), e);
    }, [t, f, A, h, i, d, c, u, _]);
  }
}
