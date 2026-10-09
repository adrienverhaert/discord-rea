/* Recovered shipped factory. Module 123166.
 * Source: recovered/web/assets/533077.aaffa7a528706cc2.js
 * UTF-16 property offsets: 2530..2788
 * Raw property SHA-256: d561b7895d7bc5a474954d788c8d39770e5f06e20507531550db4355db1790a9
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, t, e) {
  var n,
    o,
    i = e(860511),
    u = e(65978),
    a = i.process,
    c = i.Deno,
    f = (a && a.versions) || (c && c.version),
    s = f && f.v8;
  (s && (o = (n = s.split("."))[0] > 0 && n[0] < 4 ? 1 : +(n[0] + n[1])),
    !o &&
      u &&
      (!(n = u.match(/Edge\/(\d+)/)) || n[1] >= 74) &&
      (n = u.match(/Chrome\/(\d+)/)) &&
      (o = +n[1]),
    (r.exports = o));
}
