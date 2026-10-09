/* Recovered shipped factory. Module 633334.
 * Source: recovered/web/assets/8cf9e7ce4c0ac641.js
 * UTF-16 property offsets: 4493..4735
 * Raw property SHA-256: bfbe22d622b70f69bb014ed649921efa08952cd37c671df74b3509263fddd787
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  (n.d(t, { I: () => s }), n(321073));
  var i = n(91871),
    l = n.n(i);
  function s(e, t, n) {
    if ("" === n) return e;
    let i = n.toLowerCase(),
      s = [];
    for (let a of e) {
      let { id: e, names: r } = t(a);
      if (e === n) return [a];
      r.some((e) => l()(i, e.toLowerCase())) && s.push(a);
    }
    return s;
  }
}
