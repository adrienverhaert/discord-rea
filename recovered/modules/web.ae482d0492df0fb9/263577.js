/* Recovered shipped factory. Module 263577.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3992058..3992935
 * Raw property SHA-256: b9e0982910d13b9db9fcc2fcb334750183f18f7b8dc6764fbaf25d17e20cbe86
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { V: () => A });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(462887),
    o = n(109112),
    d = n(661531),
    c = n(866665),
    u = n(736653),
    _ = n(660183),
    E = n(130811);
  function A(e) {
    let {
        src: t,
        size: n,
        constrain: a = "height",
        className: A,
        alt: h,
        fallbackSrc: f,
        "aria-hidden": I,
        showTooltip: p = !1,
      } = e,
      T = (0, u.Ay)(),
      m = `${n}px`,
      [g, S] = r.useState(!1),
      [N, C] = r.useState(!1),
      O = null == f || N;
    if (null == t || (g && O))
      return (0, i.jsx)(o._, {
        size: "custom",
        width: "100%",
        height: "100%",
        color: (0, l.M)(T) ? d.A.colors.WHITE : d.A.colors.BLACK,
        style: { maxWidth: m },
        className: s()(E.f, A),
      });
    let R = "height" === a ? { maxWidth: m, height: m } : { maxWidth: m, minHeight: m };
    return (0, i.jsx)(
      c.m,
      {
        "aria-label": h,
        __unsupportedReactNodeAsText: h,
        shouldShow: p,
        children: (0, i.jsx)("img", {
          style: R,
          className: s()(E.f, A),
          src: g && null != f ? f : t,
          "aria-hidden": I,
          alt: h ?? (I ? void 0 : _.intl.string(_.t["2B/phM"])),
          onError: (e) => (g ? C(!0) : S(!0)),
        }),
      },
      "content-image",
    );
  }
}
