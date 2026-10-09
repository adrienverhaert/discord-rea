/* Recovered shipped factory. Module 147925.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9409604..9410143
 * Raw property SHA-256: 21db10855a704e05db8da439ca4ae702979020c10c3d746ff70ed5eb0b1d770c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u });
  var i = n(477900);
  n(582128);
  var r = n(900797),
    a = n(847374),
    s = n(921853),
    l = n(320448),
    o = n(103335);
  let d = { UP: o.hv, RIGHT: o.kL, DOWN: o.Gb, LEFT: o.PI };
  function c(e) {
    let {
        direction: t = d.DOWN,
        width: n = 24,
        height: o = 24,
        color: c = "currentColor",
        className: u,
        foreground: _,
        expanded: E,
        ...A
      } = e,
      h = t;
    !0 === E ? (h = d.DOWN) : !1 === E && (h = d.RIGHT);
    let f = { [d.UP]: r.t, [d.DOWN]: a.a, [d.LEFT]: s.n, [d.RIGHT]: l._ }[h];
    return (0, i.jsx)(f, {
      ...A,
      className: u,
      size: "custom",
      width: n,
      height: o,
      color: c ?? "currentColor",
      colorClass: _,
    });
  }
  c.Directions = d;
  let u = c;
}
