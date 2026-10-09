/* Recovered shipped factory. Module 873033.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 174699..174985
 * Raw property SHA-256: 577ce44a8aa7ded958334d1123c97680127cc0f2522fb0b440b4980189df63e0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(249297),
    o =
      /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
    a = /\\(\\)?/g;
  e.exports = r(function (e) {
    var t = [];
    return (
      46 === e.charCodeAt(0) && t.push(""),
      e.replace(o, function (e, n, r, o) {
        t.push(r ? o.replace(a, "$1") : n || e);
      }),
      t
    );
  });
}
