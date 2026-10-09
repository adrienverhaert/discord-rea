/* Recovered shipped factory. Module 916845.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 959903..960278
 * Raw property SHA-256: ac76642fe3716b762a54163129f52fb5e30acdae879a095526fc1700d4dc8c0a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { q: () => d });
  var i = n(477900),
    r = n(582128),
    a = n(113325),
    s = n(815021),
    l = n(660183),
    o = n(489387);
  function d(e) {
    let { onClick: t, "aria-label": n = l.intl.string(l.t.cpT0Cq), variant: d } = e,
      { firstFocusableItemProps: c } = r.useContext(a.MV);
    return (0, i.jsx)("div", {
      className: o.closeButton,
      children: (0, i.jsx)(s.J, { size: "sm", "aria-label": n, onClick: t, variant: d, ...c }),
    });
  }
}
