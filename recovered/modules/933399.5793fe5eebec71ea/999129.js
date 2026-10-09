/* Recovered shipped factory. Module 999129.
 * Source: recovered/web/assets/933399.5793fe5eebec71ea.js
 * UTF-16 property offsets: 3853..4209
 * Raw property SHA-256: 6f327fa7c98ebd4994c257d9f2bd8c8ee10586f1bc30aaed049cac2d9df92d64
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  r.d(t, { A: () => o });
  var n = r(582128);
  let i = [];
  function o(e, t) {
    let r = (0, n.useRef)(),
      o = (0, n.useRef)(i);
    return (
      o.current === i
        ? ((r.current = e()), (o.current = t))
        : !(function (e, t) {
            if (e.length !== t.length) return !1;
            for (let r = 0; r < t.length && r < e.length; r++)
              if (!Object.is(e[r], t[r])) return !1;
            return !0;
          })(t, o.current) && ((r.current = e()), (o.current = t)),
      r.current
    );
  }
}
