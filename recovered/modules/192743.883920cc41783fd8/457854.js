/* Recovered shipped factory. Module 457854.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 177777..178000
 * Raw property SHA-256: b2e2ac80d59f6f281b49a1402b6d145f4b9bc4233ecf3402bf77b42504e6c33f
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(528414),
    o = n(548178),
    a = n(687382),
    i = Math.max,
    u = Math.min;
  e.exports = function (e, t, n) {
    var l = null == e ? 0 : e.length;
    if (!l) return -1;
    var s = l - 1;
    return (
      void 0 !== n && ((s = a(n)), (s = n < 0 ? i(l + s, 0) : u(s, l - 1))),
      r(e, o(t, 3), s, !0)
    );
  };
}
