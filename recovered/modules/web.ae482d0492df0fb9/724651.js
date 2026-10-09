/* Recovered shipped factory. Module 724651.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6774329..6774962
 * Raw property SHA-256: 8708eac81f38d4f6e7771d690124fbb08a9dc9d0395b3a490ebbe8005b5515f8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { p: () => l, O: () => o });
  var i = n(354670),
    r = n(432779),
    a = n(202541);
  function s(e, t) {
    return null == t || null == e || t.has(e.discountId) ? e : null;
  }
  function l() {
    let e = i.A.canFractionalPremiumUserUseOffer();
    return (0, r.A)(a.xH, e);
  }
  function o(e) {
    return (function (e) {
      let { includePremiumGroupDiscount: t = !1 } = null != e ? e : {},
        n = i.A.canFractionalPremiumUserUseOffer(),
        l = (0, r.A)(a.TU, n),
        o = (0, r.A)(a.KG, n),
        d = (0, r.A)(a.lj, n),
        c = (0, r.A)(a.HF, n),
        u = (0, r.A)(a.V2, n),
        _ = (0, r.A)(a.UX, n),
        E = (0, r.A)(a.RG, n),
        A = (0, r.A)(a.xH, n);
      return (
        s(l, void 0) ??
        s(o, void 0) ??
        s(d, void 0) ??
        s(c, void 0) ??
        s(u, void 0) ??
        s(_, void 0) ??
        s(E, void 0) ??
        (t ? s(A, void 0) : null)
      );
    })(e);
  }
}
