/* Recovered shipped factory. Module 22098.
 * Source: recovered/web/assets/web.ae482d0492df0fb9.js
 * UTF-16 property offsets: 3402040..3402408
 * Raw property SHA-256: bf3cb7a3a6a4eb6e939ab813b9549463476620ae68cc3bc8facdd3f3f1797953
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  n.d(t, { Q: () => r });
  var i = n(820066);
  function r(e, t, n, r) {
    let a = 0;
    for (let s = 0; s < n.length; s++) {
      let l = n[s];
      if (null == l) continue;
      let o = a + l.length;
      if (r <= o) {
        let n = i.PW.child(t, s),
          l = i.VW.node(e, n)[0];
        if (i.l5.isText(l)) return { path: n, offset: Math.min(Math.max(r - a, 0), l.text.length) };
      }
      a = o;
    }
    let s = n.length - 1;
    return { path: i.PW.child(t, s), offset: n[s]?.length ?? 0 };
  }
}
