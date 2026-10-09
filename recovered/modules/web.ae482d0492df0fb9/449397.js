/* Recovered shipped factory. Module 449397.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3698354..3698859
 * Raw property SHA-256: 9d8dab6757d618211de628fd82f3b469eda1749f27a4c4dc8e0e765660ed9ed1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { e: () => u });
  var i = n(477900),
    r = n(582128),
    a = n(821609),
    s = n(688810),
    l = n(609174),
    o = n(721610),
    d = n(686320),
    c = n(406980);
  function u(e) {
    let { variant: t = "primary" } = e,
      n = (0, l.Y_)(),
      { analyticsLocations: u } = (0, s.Ay)(),
      { picker: _ } = r.useContext(o.$),
      { label: E, icon: A } = (0, d.$)(_?.action),
      h = r.useCallback(
        (e) => {
          (e.stopPropagation(), e.preventDefault(), null != _)
            ? _.onPick(n)
            : (0, c.K)([n], { analyticsLocations: u });
        },
        [n, u, _],
      );
    return (0, i.jsx)(a.$, { onClick: h, icon: A, variant: t, size: "sm", text: E, fullWidth: !0 });
  }
}
