/* Recovered shipped factory. Module 397933.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 171255..171429
 * Raw property SHA-256: 62f20529ea0bf5ed92e6df97c882e9e4e50a1d0ed6c553de80888059ba183861
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(309366),
    o = Array.prototype.splice;
  e.exports = function (e) {
    var t = this.__data__,
      n = r(t, e);
    return !(n < 0) && (n == t.length - 1 ? t.pop() : o.call(t, n, 1), --this.size, !0);
  };
}
