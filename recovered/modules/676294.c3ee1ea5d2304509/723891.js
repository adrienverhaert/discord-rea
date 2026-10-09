/* Recovered shipped factory. Module 723891.
 * Source: recovered/web/assets/676294.c3ee1ea5d2304509.js
 * UTF-16 property offsets: 893..1060
 * Raw property SHA-256: 3aae35f6f5fc0375185a8469f8430431a4ef4bc3cc1b0c49322d91c180ca9351
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var i = n(515304);
  e.exports = function (e, t) {
    var n = -1,
      r = e.length,
      o = r - 1;
    for (t = void 0 === t ? r : t; ++n < t;) {
      var s = i(n, o),
        a = e[s];
      ((e[s] = e[n]), (e[n] = a));
    }
    return ((e.length = t), e);
  };
}
