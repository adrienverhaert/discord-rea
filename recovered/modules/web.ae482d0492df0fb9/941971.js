/* Recovered shipped factory. Module 941971.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 5463422..5463855
 * Raw property SHA-256: 922086f5823db2798a878aa8833dc13cfdb78c45ed7f13a3e54bfd03bd51b5ad
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(354001);
  function l(e) {
    let {
      selected: t = !1,
      hovered: n = !1,
      unread: r = !1,
      disabled: l = !1,
      className: o,
      overlay: d = !1,
      size: c = "medium",
    } = e;
    ((t = !l && t), (n = !l && n), (r = !l && r));
    let u = t || n || r;
    return (0, i.jsx)("div", {
      className: a()(o, s.iE, { [s.Lw]: d, [s.EX]: "small" === c }),
      "aria-hidden": !0,
      children: (0, i.jsx)("span", { className: a()(s.AS, { [s.RK]: u, [s.yo]: n, [s.wH]: t }) }),
    });
  }
}
