/* Recovered shipped factory. Module 31034.
 * Source: recovered/web/assets/434742.5289724900ea180e.js
 * UTF-16 property offsets: 773..1012
 * Raw property SHA-256: 17a406915fffc1f029ce224a101bc9ffc9522ce11f91d558586e10c211aedeef
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (t, r, e) {
  var o = e(491238),
    n = Object.prototype,
    c = n.hasOwnProperty,
    p = n.toString,
    i = o ? o.toStringTag : void 0;
  t.exports = function (t) {
    var r = c.call(t, i),
      e = t[i];
    try {
      t[i] = void 0;
      var o = !0;
    } catch (t) {}
    var n = p.call(t);
    return (o && (r ? (t[i] = e) : delete t[i]), n);
  };
}
