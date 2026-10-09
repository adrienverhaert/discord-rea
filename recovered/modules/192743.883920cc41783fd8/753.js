/* Recovered shipped factory. Module 753.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 161240..161464
 * Raw property SHA-256: 68d247cd3f2e993882212ae59cbd41993d573fe420866371dde1c20a460ef2ee
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(548178),
    o = n(667349),
    a = n(473951);
  e.exports = function (e) {
    return function (t, n, i) {
      var u = Object(t);
      if (!o(t)) {
        var l = r(n, 3);
        ((t = a(t)),
          (n = function (e) {
            return l(u[e], e, u);
          }));
      }
      var s = e(t, n, i);
      return s > -1 ? u[l ? t[s] : s] : void 0;
    };
  };
}
