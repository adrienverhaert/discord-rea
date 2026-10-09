/* Recovered shipped factory. Module 205106.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6086575..6087173
 * Raw property SHA-256: ca46485eeeb4de534aa680a21aea4983565da3f087480fa395403f8fce8cfb84
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(723702);
  n(17928);
  var r = n(945810);
  n(710195);
  let a = { preferSystemEffects: !1 },
    s = (0, r.mj)({
      name: "2025-12-windows-audio-effects",
      kind: "user",
      defaultConfig: a,
      variations: { 1: { ...a, preferSystemEffects: !0 } },
    }),
    l = new Set(["voice_isolation", "wide_spectrum"]);
  function o(e, t) {
    if ((0, i.isIOS)() || (0, i.isMac)()) return !l.has(t) && e;
    if (!e || null == t || "" === t) return e;
    if ((0, i.isWindows)() && "deep_noise_suppression" === t) {
      let { preferSystemEffects: e } = (function (e) {
        let { location: t } = e;
        return s.getConfig({ location: t });
      })({ location: "setNoiseCancellation" });
      if (e) return !1;
    }
    return e;
  }
}
