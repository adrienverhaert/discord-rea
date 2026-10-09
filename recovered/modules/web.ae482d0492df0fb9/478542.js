/* Recovered shipped factory. Module 478542.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 963544..963917
 * Raw property SHA-256: 169ba41149f405231045cacebf607472d1e3b0a185d4af82479a1f3aa83f0d7b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { p: () => d });
  var i = n(477900),
    r = n(582128),
    a = n(113325),
    s = n(815021),
    l = n(660183),
    o = n(594024);
  function d(e) {
    let { onClick: t, "aria-label": n = l.intl.string(l.t.cpT0Cq) } = e,
      { firstFocusableItemProps: d } = r.useContext(a.MV);
    return (0, i.jsx)("div", {
      className: o.b,
      children: (0, i.jsx)(s.J, {
        size: "xs",
        "aria-label": n,
        onClick: t,
        variant: "overlay-secondary",
        ...d,
      }),
    });
  }
}
