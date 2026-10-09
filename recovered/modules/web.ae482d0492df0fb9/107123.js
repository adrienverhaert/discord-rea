/* Recovered shipped factory. Module 107123.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5250853..5251291
 * Raw property SHA-256: 72225f01deb844eeaa1d25921812072711858769642b101f5293559abc723b54
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { P: () => s, v: () => l });
  var i = n(95701),
    r = n(149790),
    a = n(652215);
  function s(e, t) {
    if (null == e || "" === e) return null;
    let n = new Date(e);
    return !(n instanceof Date) || isNaN(n.getTime())
      ? null
      : n.toLocaleDateString(t, { year: "numeric", month: "short" });
  }
  function l(e) {
    if (null == e.guild || (0, r.DY)(e.guild).features.has(a.GuildFeatures.HUB)) return !1;
    let t = e?.channel != null ? (0, i.OY)(e.channel) : null;
    return !t?.isGuildVoiceOrThread();
  }
}
