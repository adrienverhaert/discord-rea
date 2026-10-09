/* Recovered shipped factory. Module 315629.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9905652..9906126
 * Raw property SHA-256: bc5b4eb3328eb1fd6fefc949a867a5b0f287bbe6e8348b6c8e671b0577949dd6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { h: () => l });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(129735);
  function l(e) {
    let { color: t = "purple", offsetBottom: n = 0, children: r, ref: l, ...o } = e,
      d = "object" == typeof t && null != t;
    return (0, i.jsx)("div", {
      ref: l,
      ...o,
      className: a()(s.container, d ? void 0 : s[t], o.className),
      style: {
        ...o.style,
        ...(d
          ? {
              "--custom-gradient-color-start": t.start.css,
              "--custom-gradient-color-end": t.end.css,
            }
          : {}),
        "--custom-gradient-offset-bottom": `${100 * n}%`,
      },
      children: r,
    });
  }
}
