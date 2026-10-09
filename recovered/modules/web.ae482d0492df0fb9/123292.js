/* Recovered shipped factory. Module 123292.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 9897875..9898436
 * Raw property SHA-256: c2fbbb99bf5a0ead7891335abe927584cfa85a265d572ca6ce965e7d1b106f48
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Q: () => d });
  var i = n(477900);
  n(582128);
  var r = n(503698),
    a = n.n(r),
    s = n(559106),
    l = n(834730),
    o = n(778956);
  function d(e) {
    let {
      focusProps: t,
      lineClamp: n = 1,
      role: r = "button",
      text: d,
      textVariant: c = "text-md/medium",
      type: u = "button",
      variant: _ = "primary",
      buttonRef: E,
      className: A,
      style: h,
      ...f
    } = e;
    return (0, i.jsx)(s.vN, {
      ...t,
      children: (0, i.jsx)("button", {
        className: a()(o.textButton, o[_]),
        "data-mana-component": "text-button",
        role: r,
        type: u,
        ref: E,
        ...f,
        children: (0, i.jsx)(l.E, {
          tag: "span",
          variant: c,
          color: "none",
          lineClamp: n,
          className: o.text,
          children: d,
        }),
      }),
    });
  }
}
