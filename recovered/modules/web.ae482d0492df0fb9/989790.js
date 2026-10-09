/* Recovered shipped factory. Module 989790.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6803041..6805862
 * Raw property SHA-256: 8115a87df349a324a7974fca1c8c381d90edd426809e88ac90c377e2bf9d3dae
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { PA: () => m, O9: () => g, o1: () => p, bV: () => I, FY: () => T, bf: () => S });
  var i = n(17928),
    r = n(780964),
    a = n(766075),
    s = n(287809),
    l = n(166403),
    o = n(158045),
    d = n(427262),
    c = n(593032),
    u = n(202541),
    _ = n(88001),
    E = n(259589),
    A = n(660183),
    h = n(97352),
    f = n(580630);
  function I(e, t) {
    let { withIntervals: n } = t ?? {};
    if (null == e || !e.hasAnyPremiumGroup) return null;
    let i = e.planIdFromItems;
    if (null == i) return null;
    let r = h.A.get(i);
    if (null == r) return null;
    let a = (0, o.y8)(i),
      s = (0, f.$g)(a.amount, a.currency);
    if (!n) return s;
    {
      let { interval: e, intervalCount: t } = r;
      return (0, f.CE)(s, e, t);
    }
  }
  function p(e) {
    let t,
      n,
      { sender: i, channel: l, isSender: o, inviteState: c } = e,
      u = (0, _.DP)();
    if (o) {
      let e = (function (e, t) {
        if (null == t) return null;
        let n = t.recipients?.find((t) => t !== e.id),
          i = s.default.getUser(n);
        return null == i ? null : (0, d.$3)(i);
      })(i, l);
      if (null == e) return null;
      let o = A.intl.format(E.default.MkcFjx, { receiverName: e, premiumGroupProductName: u });
      switch (c) {
        case _.xI.ACCEPTED:
          ((t = A.intl.formatToPlainString(E.default.K37xCB, { premiumGroupProductName: u })),
            (n = A.intl.formatToPlainString(E.default["W7e/z1"], { receiverName: e })));
          break;
        case _.xI.REMOVED:
        case _.xI.NOT_FOUND:
        case _.xI.ERROR:
          ((t = A.intl.formatToPlainString(E.default.YLvraS, { premiumGroupProductName: u })),
            (n = A.intl.format(E.default.BHxlIR, {
              premiumGroupProductName: u,
              onClick: () => {
                (0, a.openUserSettings)(r.X.SUBSCRIPTIONS_PANEL);
              },
            })));
          break;
        case _.xI.PENDING:
        default:
          ((t = A.intl.formatToPlainString(E.default["5uwv8J"], { premiumGroupProductName: u })),
            (n = A.intl.formatToPlainString(E.default["AmE0B/"], { receiverName: e })));
      }
      return { message: o, header: t, body: n };
    }
    {
      let e = (0, d.$3)(i),
        r = A.intl.format(E.default["51Kv/4"], {
          senderName: e,
          premiumGroupProductName: u,
          helpCenterLink: _.TE,
        });
      switch (c) {
        case _.xI.ACCEPTED:
          ((t = A.intl.string(E.default.ssge1y)),
            (n = A.intl.formatToPlainString(E.default.fTAcw3, { senderName: e })));
          break;
        case _.xI.REMOVED:
        case _.xI.NOT_FOUND:
        case _.xI.ERROR:
          ((t = A.intl.formatToPlainString(E.default["AmLUw+"], { premiumGroupProductName: u })),
            (n = A.intl.formatToPlainString(E.default["7XAuyg"], { premiumGroupProductName: u })));
          break;
        case _.xI.PENDING:
        default:
          ((t = A.intl.string(E.default.ssge1y)),
            (n = A.intl.formatToPlainString(E.default.MkcdX8, {
              senderName: e,
              premiumGroupProductName: u,
            })));
      }
      return { message: r, header: t, body: n };
    }
  }
  function T(e) {
    let { isGift: t } = e;
    return m() && !t;
  }
  function m() {
    let e = (0, c.A)({ location: "PremiumGroupPurchase" }),
      t = (0, i.bG)([l.A], () => l.A.getPremiumSubscription()),
      n = (0, i.bG)([s.default], () => s.default.getCurrentUser());
    return (
      !n?.isPremiumWithFractionalPremiumOnly() &&
      !!e &&
      (null == t || (u.BL.has(t.premiumPlanIdFromItems ?? "") && !t.isPurchasedExternally))
    );
  }
  function g() {
    let e = (0, c.A)({ location: "PremiumGroupPurchase" }),
      t = m(),
      n = (0, i.bG)([s.default], () => s.default.getCurrentUser());
    return !!e && !!t && (null == n || !n.isPremiumWithPremiumGroup());
  }
  function S() {
    let e = g(),
      t = (0, i.bG)([s.default], () => s.default.getCurrentUser());
    return e && ((0, o.TW)(t) || !(0, o.mv)(t));
  }
}
