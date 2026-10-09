/* Recovered shipped factory. Module 702483.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3435561..3436072
 * Raw property SHA-256: b886ca1d435b78168713d4610bd481cf9eb2426b3b91d637eaddbcfd0e40d01d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  (n.d(t, { A: () => a }), n(321073));
  var i = n(22098),
    r = n(820066);
  function a(e, t) {
    if (r.VW.areStylesDisabled(e)) return [];
    let [n, a] = t,
      s = [];
    if (!r.AS.isType(n, "line") || null == n.codeBlockState) return s;
    let { hljsTypes: l, isStyledCodeBlockLine: o } = n.codeBlockState;
    if (null == l || 0 === l.length || !o) return [];
    for (let t of l) {
      let l = n.children.map((e) => (r.l5.isText(e) ? e.text : null));
      s.push({
        hljsTypes: t.types,
        ...(null != t.style ? { ansiStyle: t.style } : null),
        anchor: (0, i.Q)(e, a, l, t.start),
        focus: (0, i.Q)(e, a, l, t.end),
      });
    }
    return s;
  }
}
