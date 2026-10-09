/* Recovered shipped factory. Module 526292.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6700607..6702895
 * Raw property SHA-256: 29ed276bd78272b49ce96742387dc13931d0d8521245a6cdc61ffa7d8fb3367c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    Bv: () => S,
    ar: () => f,
    f9: () => g,
    g5: () => m,
    k0: () => N,
    k5: () => I,
    nf: () => T,
  });
  var i = n(582128),
    r = n(536637),
    a = n.n(r),
    s = n(17928),
    l = n(155718),
    o = n(166403),
    d = n(89366),
    c = n(881489),
    u = n(10392),
    _ = n(432779),
    E = n(724651),
    A = n(732280),
    h = n(202541);
  function f() {
    let e = (0, A.V)(),
      t = (0, d.QQ)(),
      n = (0, E.O)(),
      i = (0, E.p)(),
      r = I();
    return null != e || t || null != n || null != i || r;
  }
  let I = () => {
    let e = (0, s.bG)([o.A], () => o.A.getPremiumTypeSubscription()),
      t = e?.metadata?.active_discount_expires_at;
    return null != t && a()(Date.now()) <= a()(t);
  };
  function p(e) {
    switch (e) {
      case h.q:
      case h.lj:
        return { duration: 1, percentage: 30, discountId: e };
      case h.W7:
        return { duration: 1, percentage: 10, discountId: e };
      case h.Qo:
        return { duration: 1, percentage: 50, discountId: e };
      case h.EG:
      case h.TU:
      case h.KG:
        return { duration: 3, percentage: 30, discountId: e };
      case h.HF:
        return { duration: 1, percentage: 40, discountId: e };
      case h.BR:
        return { duration: 1, percentage: 20, discountId: e };
      case h.CW:
        return { duration: 1, percentage: 25, discountId: e };
      case h.UX:
        return { duration: 12, percentage: 20, discountId: e };
      case h.RG:
        return { duration: 12, percentage: 30, discountId: e };
      case h.V2:
        return { duration: 1, percentage: 40, discountId: e };
      case h.xH:
        return { duration: 3, percentage: 30, discountId: e };
      case h.sC:
        return { duration: 1, percentage: 30, discountId: e };
      default:
        return;
    }
  }
  function T() {
    let e = (0, s.bG)([o.A], () => o.A.getPremiumTypeSubscription());
    return p(e?.metadata?.active_discount_id);
  }
  function m(e) {
    let t = (0, _.A)(h.q),
      n = (0, _.A)(h.W7),
      r = (0, _.A)(h.Qo),
      a = (0, _.A)(h.EG),
      [s, l] = i.useState(!1),
      [o, d] = i.useState(!1),
      [c, E] = i.useState(null),
      A = t ?? n ?? r ?? a ?? null;
    if (null != A) return { churnUserDiscountOffer: A, isFetchingChurnDiscountOffer: !1 };
    if (e) return { churnUserDiscountOffer: c, isFetchingChurnDiscountOffer: o };
    function f() {
      (l(!0), d(!1));
    }
    return (
      o ||
        s ||
        (d(!0),
        (0, u.qz)()
          .then((e) => {
            (E(e), f());
          })
          .catch((e) => {
            f();
          })),
      { churnUserDiscountOffer: c, isFetchingChurnDiscountOffer: o }
    );
  }
  function g() {
    let e = (0, s.bG)([o.A], () => o.A.getPremiumTypeSubscription()),
      t = I(),
      n = null !== e && e.hasPremiumNitroMonthly,
      i = !!e?.hasActiveTrial;
    return n && !t && !i;
  }
  function S(e) {
    for (let t of e.invoiceItems) {
      let e = t.discounts.find((e) => e.type === l.iS.SUBSCRIPTION_PLAN);
      if (e?.discount_id != null && h.i_.includes(e.discount_id))
        return {
          duration: p(e.discount_id)?.duration,
          percentage: e.percentage_amount,
          discountId: e.discount_id,
        };
    }
    return null;
  }
  function N() {
    return (0, c.ds)();
  }
}
