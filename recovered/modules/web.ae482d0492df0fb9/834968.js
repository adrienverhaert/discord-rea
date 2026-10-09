/* Recovered shipped factory. Module 834968.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 2997923..2998502
 * Raw property SHA-256: 0fc29b50fcf3e79d8e19db1f117b23cb8470cc973e48011119d6240539fec1a0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => c });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(633018),
    l = n(406810),
    o = n(73510),
    d = n(374248);
  function c(e) {
    let {
        section: t,
        className: n,
        width: r,
        height: c,
        padding: u,
        isSelected: _,
        selectable: E = !1,
        ...A
      } = e,
      h = (function (e) {
        switch (e.id) {
          case o.Ik.BUILT_IN:
            return s.k;
          case o.Ik.FRECENCY:
            return l.ClockIcon;
          default:
            return;
        }
      })(t);
    return (0, i.jsx)("div", {
      className: a()(d.iE, n, { [d.rb]: E, [d.wH]: E && _ }),
      style: { width: r, height: c, padding: u ?? 0 },
      children:
        null != h
          ? (0, i.jsx)(h, {
              className: d.Kk,
              color: "currentColor",
              size: "custom",
              width: r,
              height: c,
              ...A,
            })
          : null,
    });
  }
}
