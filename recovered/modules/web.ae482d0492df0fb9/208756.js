/* Recovered shipped factory. Module 208756.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 957761..958107
 * Raw property SHA-256: 706d0b7318dc8370f59a9bb9eff7ff671ef68aa8660e0c925d420af8fecacc98
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Z: () => d });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(825484),
    l = n(821609),
    o = n(489387);
  function d(e) {
    let { actions: t, className: n } = e;
    return (0, i.jsx)("div", {
      className: a()(o.actionBar, n),
      children: (0, i.jsx)(s.e, {
        size: "sm",
        fullWidth: !0,
        direction: "vertical",
        children: t.map((e, t) => (0, i.jsx)(l.$, { ...e }, t)),
      }),
    });
  }
}
