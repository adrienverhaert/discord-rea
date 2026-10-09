/* Recovered shipped factory. Module 429913.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3026274..3026826
 * Raw property SHA-256: d7369cfea8c11f4fcc8c3883bf8b00b6b54617b71e69c05f89c5ec5cacdd4e4b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { A: () => u, h: () => _ });
  var i = n(582128),
    r = n(435558),
    a = n.n(r),
    s = n(17928),
    l = n(52133),
    o = n(403362),
    d = n(627363),
    c = n(587895);
  function u(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
      n = i.useRef([]);
    return (
      i.useEffect(() => {
        t &&
          !(0, l.v)(e, n.current) &&
          (d.Ay.fetchApplications(a()(e).filter(o.Vq).uniq().value(), !1), (n.current = e));
      }, [e, t]),
      (0, s.yK)([c.A], () => e.map((e) => (null != e ? c.A.getApplication(e) : void 0)))
    );
  }
  function _(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return u(null != e ? [e] : [], t)[0];
  }
}
