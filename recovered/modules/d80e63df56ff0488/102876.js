/* Recovered shipped factory. Module 102876.
 * Source: recovered/web/assets/d80e63df56ff0488.js
 * UTF-16 property offsets: 1295..1576
 * Raw property SHA-256: 03454049cf7b606bdecd092e990435688c3344b397dc8fa862c3177eb1245731
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, i) {
  i.d(t, { A: () => a });
  var r = i(477900),
    s = i(769015),
    n = i(227196);
  function a(e) {
    let { application: t, useComma: i = !1 } = e;
    return (0, r.jsxs)("div", {
      className: n.z,
      children: [
        (0, r.jsx)(s.A, { className: n.I, game: t, size: s.M.XSMALL }),
        (0, r.jsx)("strong", { children: `${t.name}${i ? ", " : ""}` }),
      ],
    });
  }
}
