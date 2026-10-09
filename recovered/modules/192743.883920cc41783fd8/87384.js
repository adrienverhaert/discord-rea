/* Recovered shipped factory. Module 87384.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 160715..160872
 * Raw property SHA-256: 744a8b975d5905f1e276c16fe5455b540aea288e98d956e5e45cf7c5aadf517d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  e.exports = function (e) {
    return function (t, n, r) {
      for (var o = -1, a = Object(t), i = r(t), u = i.length; u--;) {
        var l = i[e ? u : ++o];
        if (!1 === n(a[l], l, a)) break;
      }
      return t;
    };
  };
}
