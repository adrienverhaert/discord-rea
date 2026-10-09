/* Recovered shipped factory. Module 469993.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4132022..4132500
 * Raw property SHA-256: 1678bf67c4489272a57a328ad39b6738c8f0de72e02e520ff549fb7c81723c0e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { ME: () => u, Z1: () => c, oS: () => d });
  var i = n(17928),
    r = n(287809),
    a = n(615405),
    s = n(652215);
  let l = new Set(["US"]);
  function o() {
    return r.default.getCurrentUser()?.storeCountry?.country ?? a.A.ipCountryCode;
  }
  function d() {
    return (0, i.bG)([r.default, a.A], () => {
      let e = o();
      return null != e && l.has(e);
    });
  }
  function c() {
    let e = o();
    return null != e && l.has(e);
  }
  function u(e) {
    let t = null != e?.id,
      n = null != e && e.features.has(s.GuildFeatures.CREATOR_MONETIZABLE_WHITEGLOVE);
    return t || n;
  }
}
