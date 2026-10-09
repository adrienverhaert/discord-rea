/* Recovered shipped factory. Module 348422.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 144512..144797
 * Raw property SHA-256: 7d4081af8fc84594a8b1e2112d68e61aed7715867d580914b458f1bd98f8b8f5
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(49197),
    o = n(539405),
    a = n(593620),
    i = n(805760),
    u = n(233872);
  function l(e) {
    var t = -1,
      n = null == e ? 0 : e.length;
    for (this.clear(); ++t < n;) {
      var r = e[t];
      this.set(r[0], r[1]);
    }
  }
  ((l.prototype.clear = r),
    (l.prototype.delete = o),
    (l.prototype.get = a),
    (l.prototype.has = i),
    (l.prototype.set = u),
    (e.exports = l));
}
