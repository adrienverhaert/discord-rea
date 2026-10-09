/* Recovered shipped factory. Module 964195.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8073203..8074601
 * Raw property SHA-256: fda1bf1a016ecc28f6f0b5cc060bfb8de8a9a2191fbc58ebcdc48018abf43f17
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => T, F: () => g });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(589812),
    o = n(598748),
    d = n(17928),
    c = n(939249),
    u = n(554830),
    _ = n(975460),
    E = n(531913),
    A = n(633075),
    h = n(321191),
    f = n(903209),
    I = n(660183),
    p = n(374129);
  function T(e) {
    let t = (0, _.g)(e.activityApplication);
    return null == t ? null : (0, i.jsx)(m, { ...e, widgetApplication: t });
  }
  function m(e) {
    var t, n;
    let a,
      { hasWidget: s, isLoadingProfile: l } =
        ((t = e.userId),
        (n = e.widgetApplication),
        (a = (0, d.bG)([h.A], () => h.A.getUserProfile(t))),
        r.useEffect(() => {
          let e = new AbortController();
          return ((0, f.A)(t, void 0, { abortSignal: e.signal }), () => e.abort());
        }, [t]),
        r.useMemo(
          () => ({
            hasWidget: null != a && null != a.widgets && a.widgets.some((e) => (0, A.E)(e, n?.id)),
            isLoadingProfile: null == a,
          }),
          [a, n],
        ));
    return l
      ? null
      : (0, i.jsx)(g, {
          className: e.className,
          userId: e.userId,
          widgetApplicationId: e.widgetApplication.id,
          hasWidget: s,
          onClickViewMore: e.onClickViewMore,
        });
  }
  function g(e) {
    let {
        className: t,
        userId: n,
        widgetApplicationId: r,
        hasWidget: a,
        compactViewMore: d = !1,
        onClickViewMore: _,
      } = e,
      A = (0, E.A)(n, r),
      h = A.surfaceConfigs[o.m.ACTIVITY_ACCESSORY];
    return null != h && A.hasIdentity
      ? (0, i.jsxs)("div", {
          className: s()(p.kL, t),
          children: [
            (0, i.jsx)("div", {
              className: p.Qs,
              children: (0, i.jsx)(l.kH, {
                ...A,
                surface: o.m.ACTIVITY_ACCESSORY,
                surfaceConfig: h,
              }),
            }),
            a &&
              (0, i.jsx)(c.D, {
                "aria-label": I.intl.string(I.t["OBCR+p"]),
                className: s()(p.NO, { [p.O7]: d }),
                onClick: _,
                children: (0, i.jsx)(u.K, { size: "xxs" }),
              }),
          ],
        })
      : null;
  }
}
