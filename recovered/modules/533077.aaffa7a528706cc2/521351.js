/* Recovered shipped factory. Module 521351.
 * Source: recovered/web/assets/533077.aaffa7a528706cc2.js
 * UTF-16 property offsets: 6079..6338
 * Raw property SHA-256: 759c6cfa76a3be88f24f411de35350a03e3919e6171c46dba2ee75b3cf4f095d
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, t, e) {
  var n = e(503628),
    o = e(339626),
    i = /#|\.prototype\./,
    u = function (r, t) {
      var e = c[a(r)];
      return e === s || (e !== f && (o(t) ? n(t) : !!t));
    },
    a = (u.normalize = function (r) {
      return String(r).replace(i, ".").toLowerCase();
    }),
    c = (u.data = {}),
    f = (u.NATIVE = "N"),
    s = (u.POLYFILL = "P");
  r.exports = u;
}
