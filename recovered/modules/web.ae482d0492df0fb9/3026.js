/* Recovered shipped factory. Module 3026.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 892364..893076
 * Raw property SHA-256: 9b15fa858b3c4fce2440d5bcc0d31568eba5656757218172023b6c85d9ff4ccc
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => d });
  var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(900002),
    o = n(113278);
  function d(e) {
    let {
        children: t,
        "aria-label": n,
        className: a,
        position: d,
        delay: c,
        lineClamp: u = 1,
        ..._
      } = e,
      E = r.useRef(null),
      A = n ?? ("string" == typeof t && t),
      h = {};
    return (
      null != u && u > 1 && (h = { lineClamp: u, WebkitLineClamp: u }),
      (0, i.jsx)(l.ST, {
        ..._,
        position: d ?? "top",
        delay: c ?? 500,
        text: t,
        "aria-label": A,
        children: (n) => {
          let { onMouseEnter: r, onMouseLeave: l } = n;
          return (0, i.jsx)("div", {
            className: s()(a, { [o.j]: 1 === u, [o.E]: u > 1 }),
            ref: E,
            "aria-hidden": e["aria-hidden"],
            onMouseEnter: () => {
              let { current: e } = E;
              null == e ||
                (u > 1 && e.offsetHeight + 1 >= e.scrollHeight) ||
                (1 === u && e.offsetWidth >= e.scrollWidth) ||
                r?.();
            },
            onMouseLeave: l,
            style: h,
            children: t,
          });
        },
      })
    );
  }
}
