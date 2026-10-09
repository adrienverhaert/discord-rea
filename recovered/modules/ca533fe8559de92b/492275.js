/* Recovered shipped factory. Module 492275.
 * Source: recovered/web/assets/ca533fe8559de92b.js
 * UTF-16 property offsets: 364838..365614
 * Raw property SHA-256: f900024051df5cef839f0c11d2068e710e80b9dc25f3d6c1673b45fa29338d83
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { A: () => m });
  var l = n(477900);
  n(582128);
  var i = n(503698),
    r = n.n(i),
    a = n(562708),
    s = n(834730),
    o = n(688810),
    u = n(139286),
    c = n(95769),
    d = n(660183),
    p = n(70393);
  function m(e) {
    let {
        giftsToNextTier: t,
        nextTierName: n,
        nextTierIcon: i,
        analyticsLocations: m,
        className: h,
      } = e,
      { analyticsLocations: C } = (0, o.Ay)();
    return (
      (0, u.A)(
        {
          name: a.ImpressionNames.GIFTING_BADGE_PROGRESS_BANNER,
          type: a.ImpressionTypes.VIEW,
          properties: { gifts_to_next_tier: t, next_tier: n, location_stack: m ?? C },
        },
        { trackOnInitialLoad: !0 },
      ),
      (0, l.jsxs)("div", {
        className: r()(p.kL, h),
        children: [
          (0, l.jsx)("div", {
            className: p.zc,
            children:
              null != i &&
              (0, l.jsx)("img", { src: i, alt: "", width: 32, height: 32, className: p.Kk }),
          }),
          (0, l.jsx)(s.E, {
            variant: "text-md/medium",
            children: d.intl.format(c.default["0+xfd9"], { giftsRemaining: t, nextTier: n }),
          }),
        ],
      })
    );
  }
}
