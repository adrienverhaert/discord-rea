/* Recovered shipped factory. Module 753713.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8101061..8102028
 * Raw property SHA-256: c6dce9d81af030bd732716c3aaf4036b1355b68e35e55de068df65fc95aad9e1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(477900);
  n(582128);
  var r = n(834730),
    a = n(853390),
    s = n(660183),
    l = n(767395);
  function o(e) {
    let { start: t, end: n } = e,
      { elapsed: o, duration: d, percentage: c } = (0, a.Ay)({ start: t, end: n }),
      u = (function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
        return Math.floor(e / t) * t;
      })(o),
      _ = d > 0 ? Math.round((u / d) * 100) : 0,
      E = (0, a.Ar)(u),
      A = (0, a.Ar)(d),
      h = s.intl.formatToPlainString(s.t.bnnNER, { elapsed: E, duration: A });
    return (0, i.jsxs)("div", {
      className: l.kL,
      children: [
        (0, i.jsx)(r.E, {
          variant: "text-xs/normal",
          color: "text-default",
          className: l.Qq,
          "aria-hidden": !0,
          children: (0, a.fU)(o),
        }),
        (0, i.jsx)("div", {
          role: "progressbar",
          className: l.M0,
          "aria-label": s.intl.string(s.t.z2lxfe),
          "aria-valuenow": _,
          "aria-valuemin": 0,
          "aria-valuemax": 100,
          "aria-valuetext": h,
          children: (0, i.jsx)("div", { className: l.qB, style: { width: `${100 * c}%` } }),
        }),
        (0, i.jsx)(r.E, {
          variant: "text-xs/normal",
          color: "text-default",
          className: l.Qq,
          "aria-hidden": !0,
          children: (0, a.fU)(d),
        }),
      ],
    });
  }
}
