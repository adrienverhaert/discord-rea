/* Recovered shipped factory. Module 99462.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 6928736..6930436
 * Raw property SHA-256: ff2dc771dc38d94dfb68f54d4bd1f1477a8f6e3d186fc23a7139f85a3e616a53
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Fu: () => _, GZ: () => u, __: () => A, rn: () => E });
  var i = n(496431),
    r = n(773669),
    a = n(975571),
    s = n(158045),
    l = n(511484),
    o = n(202541),
    d = n(652215),
    c = n(660183);
  function u(e, t, n, i) {
    switch (e) {
      case o.pe.TIER_0:
        return t.days > 0
          ? c.intl.formatToPlainString(c.t.sP5OqC, { days: t.days })
          : t.hours > 0
            ? c.intl.formatToPlainString(c.t["7Lhfu7"], { hours: t.hours })
            : c.intl.formatToPlainString(c.t.coDiS0, { minutes: Math.max(t.minutes, 1) });
      case o.pe.TIER_2:
        return t.days > 0
          ? c.intl.formatToPlainString(c.t.GPqVWT, { days: t.days, trialPeriod: n, termsUrl: i })
          : t.hours > 0
            ? c.intl.formatToPlainString(c.t.WFMtg1, {
                hours: t.hours,
                trialPeriod: n,
                termsUrl: i,
              })
            : c.intl.formatToPlainString(c.t.SxXB42, {
                minutes: Math.max(t.minutes, 1),
                trialPeriod: n,
                termsUrl: i,
              });
      default:
        throw Error(`Unsupported subscription tier: ${e}`);
    }
  }
  function _(e) {
    let t = e.expiresAt,
      n = (0, i.A)(null != t ? t.getTime() : 0, 1e3),
      r = e?.subscriptionTrial?.skuId;
    return null == t || null == r
      ? null
      : u(
          r,
          n,
          (0, s.re)({
            intervalType: e.subscriptionTrial?.interval,
            intervalCount: e.subscriptionTrial?.intervalCount,
          }),
          a.A.getArticleURL(e.trialId === o.yo ? d.MVz.NITRO_TRIAL_FOR_ALL : d.MVz.PREMIUM_TRIAL),
        );
  }
  function E(e, t, n) {
    let i = new Intl.NumberFormat(r.default.locale, {
      style: "percent",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(t / 100);
    return e.days > 0
      ? c.intl.formatToPlainString(n ? c.t["3tVpo8"] : c.t["7mw8CZ"], {
          days: e.days,
          discountPercentage: i,
        })
      : e.hours > 0
        ? c.intl.formatToPlainString(n ? c.t.TXUGPd : c.t["0hYT6o"], {
            hours: e.hours,
            discountPercentage: i,
          })
        : c.intl.formatToPlainString(n ? c.t.CAxpzK : c.t["2rh7rw"], {
            minutes: Math.max(e.minutes, 1),
            discountPercentage: i,
          });
  }
  function A(e) {
    let t = e.expiresAt,
      n = (0, i.A)(null != t ? t.getTime() : 0, 1e3);
    return null == t ? null : E(n, Number(e.discount.amount), (0, l.hm)(e));
  }
}
