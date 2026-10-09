/* Recovered shipped factory. Module 665711.
 * Source: recovered/web/assets/3ef6861df6635ca9.js
 * UTF-16 property offsets: 25341..25623
 * Raw property SHA-256: 310cc90699954ae1a5e8d67bc921602159544ffe081aab4a477f5208ed0094c3
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  n.d(t, { W: () => i });
  var l = n(477900),
    a = n(582128),
    r = n(486020),
    s = n(264837);
  function i(e) {
    let { application: t, iconSize: n = 20 } = e,
      i = a.useMemo(() => r.Ay.getApplicationIconURL({ id: t.id, icon: t.icon, size: n }), [t, n]);
    return (0, l.jsx)("img", { className: s.I, src: i, alt: "", height: n, width: n });
  }
}
