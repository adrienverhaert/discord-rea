/* Recovered shipped factory. Module 222707.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 328714..329521
 * Raw property SHA-256: 878fdc4d316cad7e4c1454e98d4d466acdf3bb85eecfd5d7a51b8b20a79163f8
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { Nn: () => d, _V: () => c, pt: () => u });
  var l = n(531260),
    i = n(615396),
    r = n(202541),
    a = n(88001),
    s = n(660183),
    o = n(259589);
  function u(e) {
    let {
      fractionalPremiumInfo: t,
      selectedPlanId: n,
      planGroup: l,
      premiumSubscription: a,
      isGift: s,
    } = e;
    if (s || null == n) return !1;
    let o = null == a || (0, i.Ge)(a, n, l);
    return t.isFractionalPremiumActive && o && r.JM.has(n);
  }
  function c(e) {
    let {
        selectedPlanId: t,
        planGroup: n,
        premiumSubscription: i,
        isGift: r,
        fractionalPremiumInfoArgs: a = {
          forceFetch: !1,
          excludeReverseTrial: !1,
          excludeReverseTrialFromCountdown: !1,
        },
      } = e,
      s = (0, l.A)(a);
    return {
      showFractionalPremiumBanner: u({
        fractionalPremiumInfo: s,
        selectedPlanId: t,
        planGroup: n,
        premiumSubscription: i,
        isGift: r,
      }),
      fractionalPremiumInfo: s,
    };
  }
  function d() {
    return s.intl.formatToPlainString(o.default["h1i+H8"], {
      premiumGroupProductName: (0, a.DP)(),
      cooldownMonths: a.wl,
    });
  }
}
