/* Recovered shipped factory. Module 695526.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5017372..5017914
 * Raw property SHA-256: f9e1793496e7be3db28709fdddea93a4a8ca82f1afbc1025351ff74f570c2763
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { o9: () => c, qH: () => o, yh: () => d });
  var i = n(17928),
    r = n(287809),
    a = n(474090),
    s = n(202541),
    l = n(660183);
  function o() {
    return (0, i.bG)([r.default], () => {
      let e = r.default.getCurrentUser();
      return (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return t
          ? "staff"
          : (0, a.CC)(e, s.PremiumTypes.TIER_2)
            ? "entitled"
            : null != e
              ? "upgrade"
              : "acquire";
      })(e?.premiumType, e?.isStaff() ?? !1);
    });
  }
  function d(e) {
    return "upgrade" === e || "acquire" === e;
  }
  function c(e) {
    return "upgrade" === e ? l.t.KfitWs : "acquire" === e ? l.t.Sqrz1V : l.t.yZOtoD;
  }
}
