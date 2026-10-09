/* Recovered shipped factory. Module 905216.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 8407698..8408176
 * Raw property SHA-256: 58ae23e951490f820ff23150ff337c43fcc71ec27b8c4a96c8f2f94983ee12f0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => o });
  var i = n(477900);
  n(582128);
  var r = n(377802),
    a = n(730852),
    s = n(204651),
    l = n(660183);
  function o(e) {
    let { centerButton: t = !1, onClick: n, onMouseEnter: o, onMouseLeave: d, ...c } = e,
      u = t ? s.l : s.A,
      { Component: _, events: E } = (0, r.O)();
    return (0, i.jsx)(u, {
      ...c,
      isTrayButton: !1,
      onClick: function () {
        (n?.(), a.default.disconnect());
      },
      iconComponent: _,
      onMouseEnter: (e) => {
        (o?.(e), E.onMouseEnter());
      },
      onMouseLeave: (e) => {
        (d?.(e), E.onMouseLeave());
      },
      label: l.intl.string(l.t["6vrfgt"]),
    });
  }
}
