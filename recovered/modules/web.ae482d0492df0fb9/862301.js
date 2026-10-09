/* Recovered shipped factory. Module 862301.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10326318..10326765
 * Raw property SHA-256: 028ab45e0661eebf94e260b68ae1527726ed78d0c413d43b3e081cb31e07ad8e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { F: () => l });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(761535);
  function l(e) {
    let {
        as: t,
        readOnly: n,
        disabled: r,
        fullWidth: l = !1,
        children: o,
        validation: d,
        className: c,
        ref: u,
        containerClassName: _,
        ...E
      } = e,
      A = d?.hasError;
    return (0, i.jsx)(t ?? "div", {
      ref: u,
      className: a()(s.kL, _),
      "data-full-width": l,
      ...E,
      children: (0, i.jsx)("div", {
        className: a()(s.iE, c),
        "data-error": A,
        "data-read-only": n,
        "data-disabled": r,
        children: o,
      }),
    });
  }
}
