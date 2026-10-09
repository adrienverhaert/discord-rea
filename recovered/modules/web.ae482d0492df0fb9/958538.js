/* Recovered shipped factory. Module 958538.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 11655055..11655348
 * Raw property SHA-256: c85f311075fd0294b9e9e9fb83e321d86cbd5aec6447ca3880d17654bb657e49
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => a });
  var i = n(582128);
  let r = Symbol();
  function a(e, t, n) {
    let a,
      s,
      l =
        ((a = (0, i.useRef)(!1)),
        (s = (0, i.useRef)(null)),
        a.current || ((a.current = !0), (s.current = e())),
        s),
      o = (0, i.useRef)(r);
    return (
      o.current === r ? (o.current = t) : n(o.current, t) || ((l.current = e()), (o.current = t)),
      l.current
    );
  }
}
