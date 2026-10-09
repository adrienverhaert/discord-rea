/* Recovered shipped factory. Module 118328.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3743176..3743583
 * Raw property SHA-256: f6f9fe90e659e6efb57884cb84c2cc46b1f566a57bc45d59b09db4bef2a175d3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(17928),
    r = n(945810),
    a = n(952818),
    s = n(734066),
    l = n(341923);
  let o = (0, r.mj)({
    kind: "user",
    name: "2026-07-autoclipping-marketing",
    defaultConfig: { enableMarketing: !1 },
    variations: { 1: { enableMarketing: !0 } },
  });
  function d(e) {
    let t = (0, s.sw)(),
      n = (0, l.HN)(),
      r = (0, i.bG)([a.Ay], () => a.Ay.getGamesSeen(!1).length > 0),
      d = o.useConfig({ location: e }).enableMarketing;
    return t && n && r && d;
  }
}
