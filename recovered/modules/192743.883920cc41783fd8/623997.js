/* Recovered shipped factory. Module 623997.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 177451..177673
 * Raw property SHA-256: cd3a51f51c9e00a5970f711517c2b78d4d08aeb84d2bb74744200fd75fe120a2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(349468),
    o = n(762479),
    a = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
    i = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
  e.exports = function (e) {
    return (e = o(e)) && e.replace(a, r).replace(i, "");
  };
}
