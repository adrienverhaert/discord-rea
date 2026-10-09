/* Recovered shipped factory. Module 528057.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8408548..8409004
 * Raw property SHA-256: 3a7420407b2961f1dae4550746379b61e21727cb0fd323c8fe8c4edb76f16e7a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => l });
  var i = n(477900);
  n(582128);
  var r = n(416696),
    a = n(204651),
    s = n(660183);
  function l(e) {
    let { isSelfStream: t, centerButton: n = !1, onMouseEnter: l, onMouseLeave: o, ...d } = e,
      c = n ? a.l : a.A,
      { Component: u, events: _ } = (0, r.c)("disable");
    return (0, i.jsx)(c, {
      label: t ? s.intl.string(s.t.S5anIc) : s.intl.string(s.t.q3O3J8),
      isTrayButton: !1,
      iconComponent: u,
      onMouseEnter: (e) => {
        (l?.(e), _.onMouseEnter());
      },
      onMouseLeave: (e) => {
        (o?.(e), _.onMouseLeave());
      },
      ...d,
    });
  }
}
