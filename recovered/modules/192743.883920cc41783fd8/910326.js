/* Recovered shipped factory. Module 910326.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 173167..173430
 * Raw property SHA-256: b5ab7c4a0ff7b57c1a4b1544808a6a6ffb22ca1c1ca9ae4a5bc28675a6c3093d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(173260),
    o = Math.max;
  e.exports = function (e, t, n) {
    return (
      (t = o(void 0 === t ? e.length - 1 : t, 0)),
      function () {
        for (var a = arguments, i = -1, u = o(a.length - t, 0), l = Array(u); ++i < u;)
          l[i] = a[t + i];
        i = -1;
        for (var s = Array(t + 1); ++i < t;) s[i] = a[i];
        return ((s[t] = n(l)), r(e, this, s));
      }
    );
  };
}
