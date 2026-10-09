/* Recovered shipped factory. Module 184389.
 * Source: recovered/web/assets/533077.aaffa7a528706cc2.js
 * UTF-16 property offsets: 8884..9124
 * Raw property SHA-256: 900e3409482c41a500a9f59118982ed7a8a36c22f8dd1a812295b676b03c1608
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, t, e) {
  var n = e(410323),
    o = e(210140),
    i = e(581390),
    u = e(464324).indexOf,
    a = e(239586),
    c = n([].push);
  r.exports = function (r, t) {
    var e,
      n = i(r),
      f = 0,
      s = [];
    for (e in n) !o(a, e) && o(n, e) && c(s, e);
    for (; t.length > f;) o(n, (e = t[f++])) && (~u(s, e) || c(s, e));
    return s;
  };
}
