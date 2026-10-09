/* Recovered shipped factory. Module 863781.
 * Source: recovered/web/assets/533077.aaffa7a528706cc2.js
 * UTF-16 property offsets: 9281..9566
 * Raw property SHA-256: 9df79d35c5ec8983f76e327bdb34164c09955ec22d183778d752b844811df1fd
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, t, e) {
  var n = e(446474),
    o = e(339626),
    i = e(598349),
    u = TypeError;
  r.exports = function (r, t) {
    var e, a;
    if (
      ("string" === t && o((e = r.toString)) && !i((a = n(e, r)))) ||
      (o((e = r.valueOf)) && !i((a = n(e, r)))) ||
      ("string" !== t && o((e = r.toString)) && !i((a = n(e, r))))
    )
      return a;
    throw new u("Can't convert object to primitive value");
  };
}
