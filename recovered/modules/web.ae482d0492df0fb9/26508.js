/* Recovered shipped factory. Module 26508.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 7235904..7236426
 * Raw property SHA-256: 6510ae4d8e296916bdfe473b7fdc5e55a981bbf975036f75169ca3a9c2c8bec5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { CC: () => c, CZ: () => _, J8: () => d });
  var i = n(239266),
    r = n(287809),
    a = n(158045),
    s = n(636592),
    l = n(212739),
    o = n(202541);
  function d(e) {
    if (null == e) return !0;
    let t = e.next_reward_date;
    return null != t && "" !== t && (0, i.A)(new Date(t));
  }
  function c() {
    let e;
    return ((e = void 0 ?? r.default.getCurrentUser()), (0, a.YE)(e, o.PremiumTypes.TIER_2));
  }
  let u = {
    [s.W.NITRO]: c,
    [s.W.XBOX]: function () {
      return (0, l.H)(r.default.getCurrentUser());
    },
  };
  function _() {
    for (let e of Object.values(s.W)) if ("number" == typeof e && u[e]()) return !0;
    return !1;
  }
}
