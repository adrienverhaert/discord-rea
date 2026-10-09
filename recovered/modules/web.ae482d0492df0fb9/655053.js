/* Recovered shipped factory. Module 655053.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 10373106..10373496
 * Raw property SHA-256: 25af1e0ca495fcbdd2cb18745e0c13f2b93332c2328a3d3a6ed1a78fd1bd83ec
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { i: () => l });
  var i = n(477900),
    r = n(582128),
    a = n(683071),
    s = n(592551);
  function l(e) {
    let { message: t, type: n } = e,
      l = null == t || 0 === t.length || null == n,
      [o, d] = r.useState(n ?? "info"),
      [c, u] = r.useState(t ?? "");
    return (
      r.useEffect(() => {
        (null != n && d(n), null != t && u(t));
      }, [n, t]),
      (0, i.jsx)("div", {
        className: l ? s.sectionHidden : s.section,
        children: (0, i.jsx)(a.w, { type: o, hidden: l, children: c }),
      })
    );
  }
}
