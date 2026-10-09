/* Recovered shipped factory. Module 835072.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2717721..2718640
 * Raw property SHA-256: 8c0dc38a9153efb406fbc34ab02c4ddbb6cac7c655bbfc70ae4e7903251bdeef
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => I, f: () => f });
  var i = n(477900);
  n(582128);
  var r = n(451394),
    a = n(687966),
    s = n(323384),
    l = n(432017),
    o = n(748562),
    d = n(765379),
    c = n(189117),
    u = n(82149),
    _ = n(566903),
    E = n(864436),
    A = n(200041),
    h = n(652215);
  function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return (0, u.Cy)(e)
      ? r.q
      : (0, d.A)(e) || (0, c.$_)(e)
        ? t
          ? a.GameControllerIcon
          : s.k
        : e.type === h.$pd.PLAYING
          ? a.GameControllerIcon
          : e.type === h.$pd.LISTENING
            ? l.T
            : e.type === h.$pd.WATCHING || e.type === h.$pd.STREAMING
              ? o.U
              : e.type === h.$pd.COMPETING
                ? a.GameControllerIcon
                : null;
  }
  function I(e) {
    let {
        activity: t,
        textVariant: n,
        textClassName: r,
        iconClassName: a,
        hideIcon: s = !1,
        hideText: l = !1,
        hideTooltip: o = !1,
        canTruncate: d = !0,
      } = e,
      { text: c, tooltip: u } = (0, _.A)(t, !0),
      h = f(t),
      I = null != h && !s;
    return (0, i.jsx)(A.A, {
      icon: I ? (0, i.jsx)(E.A, { icon: h, className: a }) : void 0,
      text: c ?? "",
      textVariant: n,
      textClassName: r,
      hideTooltip: o,
      canTruncate: d,
      "aria-label": u ?? "",
      hideText: l,
    });
  }
}
