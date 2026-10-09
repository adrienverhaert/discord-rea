/* Recovered shipped factory. Module 183631.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 158516..158770
 * Raw property SHA-256: e4fd504d68f28516eebfd4095d9bce2ccd988c09fc263969e3e59a86c216bf19
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  e = n.nmd(e);
  var r = n(27650),
    o = t && !t.nodeType && t,
    a = o && e && !e.nodeType && e,
    i = a && a.exports === o ? r.Buffer : void 0,
    u = i ? i.allocUnsafe : void 0;
  e.exports = function (e, t) {
    if (t) return e.slice();
    var n = e.length,
      r = u ? u(n) : new e.constructor(n);
    return (e.copy(r), r);
  };
}
