/* Recovered shipped factory. Module 7588.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2727498..2727840
 * Raw property SHA-256: ddfcf9ce8458fd9e080630c5189730ee3cb0c3805c0a841271f82dbbb2eb5bc9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { C$: () => l, Oh: () => o, vV: () => d });
  var i = n(192444),
    r = n(710969),
    a = n(723702),
    s = n(929482);
  function l() {
    return i.Se.getConfig({ location: "quest_ios_attribution" }).enabled && (0, a.isIOS)();
  }
  function o(e, t) {
    return (0, r.vZ)(e, t)?.is_campaign_ios_attribution_enabled === !0;
  }
  function d(e, t, n) {
    return l() && e && o(t, n) ? (0, s.BU)() : null;
  }
}
