/* Recovered shipped factory. Module 404277.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 4801628..4802281
 * Raw property SHA-256: 119a0540c34818cbb216e16dde8de3fa1f2e60d8d7e4d1d2990a276657400ff9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => A });
  var i = n(477900),
    r = n(582128),
    a = n(574211),
    s = n(31300),
    l = n(646270),
    o = n(687966),
    d = n(140735),
    c = n(773669),
    u = n(108015),
    _ = n(468039);
  let E = { [a.Z.DESKTOP]: s.k, [a.Z.MOBILE]: l.u, [a.Z.CONSOLE]: o.GameControllerIcon };
  function A(e) {
    let { platforms: t } = e,
      n = r.useMemo(() => (0, u.RV)(t), [t]),
      a = r.useMemo(() => new Intl.ListFormat(c.default.locale).format(n.map(u.n7)), [n]);
    return (0, i.jsxs)(i.Fragment, {
      children: [
        (0, i.jsx)("span", {
          className: _.B,
          "aria-hidden": !0,
          children: n.map((e) => {
            let t = E[e];
            return (0, i.jsx)(
              "span",
              { className: _.t, children: (0, i.jsx)(t, { size: "xs", color: "currentColor" }) },
              e,
            );
          }),
        }),
        n.length > 0 && (0, i.jsx)(d.A, { children: a }),
      ],
    });
  }
}
