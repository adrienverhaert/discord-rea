/* Recovered shipped factory. Module 190187.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6843519..6844019
 * Raw property SHA-256: ef897db18a515d27d189a9e2268366e04db0f84879157dcaae2adfaf0afcf95f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { i: () => _ });
  var i = n(582128),
    r = n(17928),
    a = n(531260),
    s = n(287809),
    l = n(474090),
    o = n(526292),
    d = n(89366),
    c = n(851746),
    u = n(202541);
  function _() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      t = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
      n = (0, o.k5)(),
      _ = (0, d.QQ)(),
      E = (0, a.A)(),
      A =
        t?.verified === !0 &&
        (0, l.YE)(t, u.PremiumTypes.TIER_2) &&
        E.fetched &&
        E.fractionalState !== u.xc.FP_ONLY &&
        !n &&
        !_;
    i.useEffect(() => {
      A && !e && c.A.checkAndFetchReferralsRemaining();
    }, [A, e]);
  }
}
