/* Recovered shipped factory. Module 614795.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 170234..170434
 * Raw property SHA-256: 89f11afa156abf8ae37d8349ca8313d9b29ef1f62eeea5cb3ce48e797935d549
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(86177),
    o = n(667349),
    a = n(486412),
    i = n(980320);
  e.exports = function (e, t, n) {
    if (!i(n)) return !1;
    var u = typeof t;
    return ("number" == u ? !!(o(n) && a(t, n.length)) : "string" == u && t in n) && r(n[t], e);
  };
}
