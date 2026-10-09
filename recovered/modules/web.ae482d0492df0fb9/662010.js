/* Recovered shipped factory. Module 662010.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3992936..3993233
 * Raw property SHA-256: 3103b200b60981d18546a36da01ff9b87f63038a9553236d44ead7ce98859ed0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { O: () => l });
  var i = n(477900),
    r = n(28863),
    a = n(123917),
    s = n(824062);
  function l(e) {
    let { children: t, href: n } = e;
    return null == n
      ? t
      : (0, i.jsx)(r.Anchor, {
          className: s.n,
          href: n,
          onClick: (e) => {
            (e.stopPropagation(), a.h({ href: n }, e));
          },
          target: "_blank",
          rel: "noopener noreferrer",
          children: t,
        });
  }
}
