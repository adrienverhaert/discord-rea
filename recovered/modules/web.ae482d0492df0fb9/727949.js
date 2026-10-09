/* Recovered shipped factory. Module 727949.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6842069..6843286
 * Raw property SHA-256: 8f01fc66f7aa2741035f8af4813225e0790016e4812c0cfbe41a021eee1a0b22
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    GQ: () => A,
    NF: () => I,
    QG: () => f,
    Tp: () => m,
    ZR: () => h,
    ne: () => p,
    sZ: () => T,
  });
  var i = n(17928),
    r = n(554146),
    a = n(826673),
    s = n(501419),
    l = n(617617),
    o = n(927813),
    d = n(935208),
    c = n(851746),
    u = n(103411),
    _ = n(49999),
    E = n(660183);
  function A(e) {
    let t = (e - Date.now()) / o.A.Millis.HOUR;
    return t > 24
      ? E.intl.formatToPlainString(E.t["g9s+dA"], { numDays: Math.floor(t / 24) })
      : t >= 1
        ? E.intl.formatToPlainString(E.t.k9v33y, { numHours: Math.floor(t) })
        : E.intl.formatToPlainString(E.t["/d0GmT"], { numMinutes: Math.floor(60 * t) });
  }
  function h() {
    return (0, a.k8)(r.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
  }
  function f() {
    (0, a.Dr)(r.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE);
  }
  function I(e) {
    let { trialOffer: t } = e;
    if (null == t) return !1;
    let n = t.isReferralTrial,
      i = !t.isRedeemed,
      r = new Date(d.default.extractTimestamp(t.id)),
      a = new Date();
    return n && i && a >= r;
  }
  function p(e) {
    null != e &&
      (0, s.qr)(r.M.REFERRAL_PROGRAM_POPOVER_V2, e, { dismissAction: _.i.INDIRECT_ACTION });
  }
  function T() {
    (0, a.Dr)(r.M.REFERRAL_PROGRAM_INCENTIVE_POPOVER);
  }
  function m() {
    let e = (0, u.m)(!1),
      t = (0, i.bG)([c.A], () => c.A.getReferralsRemaining()),
      n = (0, i.bG)([c.A], () => c.A.getReminderStateId()),
      s = (0, i.bG)(
        [l.A],
        () => null != n && (0, a.u$)(r.M.REFERRAL_PROGRAM_POPOVER_V2, n).isDismissed,
      );
    return null != n && e && !s && null != t && t > 0;
  }
}
