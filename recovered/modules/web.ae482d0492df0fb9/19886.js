/* Recovered shipped factory. Module 19886.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6865574..6867600
 * Raw property SHA-256: 38d48ed9007ea5c1b08c891c1e3a8144619721bb8a8f18344d8a86ba689c530f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, {
    rG: () => h,
    Lh: () => A,
    Wo: () => E,
    p3: () => T,
    bu: () => I,
    $F: () => p,
    Xb: () => f,
  });
  var i,
    r = n(17928),
    a = n(439174),
    s = n(321191),
    l = n(287809),
    o = n(166403),
    d = n(474090);
  let c = (0, n(945810).mj)({
    kind: "user",
    name: "2026-08-nitro-tenure-badge-withheld-state",
    defaultConfig: { showWithheldBadge: !1 },
    variations: { 0: { showWithheldBadge: !1 }, 1: { showWithheldBadge: !0 } },
  });
  function u(e) {
    return (0, r.bG)([s.A, l.default], () => {
      let t,
        n = null != e ? s.A.getUserProfile(e) : null,
        i = n?.premiumSince;
      if (null == n || null == i) return null;
      if (
        (n?.badges?.forEach((e) => {
          let n = (0, a.cZ)(e.id);
          null != n && (t = n);
        }),
        null != t)
      )
        return t;
      let r = l.default.getCurrentUser();
      return e === r?.id && r?.hasPaidTier2Subscription() ? (0, a.UO)(i) : null;
    });
  }
  var _ = n(202541),
    E = (((i = {}).UPCOMING = "upcoming"), (i.WITHHELD = "withheld"), (i.EARNED = "earned"), i);
  function A() {
    let e = (0, r.bG)([l.default], () => l.default.getCurrentUser());
    return u(e?.id) ?? null;
  }
  function h(e) {
    return (0, r.bG)([s.A], () => {
      if (null == e) return null;
      let t = s.A.getUserProfile(e);
      return t?.premiumSince;
    });
  }
  function f() {
    let e = (0, r.bG)([l.default], () => l.default.getCurrentUser()),
      t = (0, d.YE)(e, _.PremiumTypes.TIER_2),
      n = (0, r.bG)(
        [o.A],
        () => {
          let e = o.A.getPremiumSubscription();
          return null != e && t ? e.premiumSince : null;
        },
        [t],
      ),
      i = h(e?.id);
    return n ?? i;
  }
  function I() {
    let e = (0, r.bG)([l.default], () => l.default.getCurrentUser()),
      t = (0, r.bG)([o.A], () => o.A.getPremiumTypeSubscription());
    return (0, d.YE)(e, _.PremiumTypes.TIER_2) ? (0, a.UO)(t?.premiumSince) : null;
  }
  function p() {
    let e,
      t,
      n = (0, r.bG)([l.default], () => l.default.getCurrentUser()),
      i = T(n?.id),
      s =
        ((e = A()),
        (t = (0, r.bG)([o.A], () => o.A.getPremiumTypeSubscription())),
        null == e || null == t || null == t.premiumSince ? null : (0, a.Xr)(e, t.premiumSince)),
      d = f();
    if (null != i) return { ...i, earnedOnDate: s, status: "earned" };
    if (null == d) return null;
    if (!n?.hasPaidTier2Subscription()) {
      let e = (0, a.UO)(d);
      if (null != e && c.getConfig({ location: "useTieredTenureBadgeData" }).showWithheldBadge)
        return { ..._.VD[e], earnedOnDate: (0, a.Xr)(e, d), status: "withheld" };
    }
    return { ...Object.values(_.VD)[0], status: "upcoming" };
  }
  function T(e) {
    let t = u(e);
    return null == t ? null : _.VD[t];
  }
}
