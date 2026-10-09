/* Recovered shipped factory. Module 42756.
 * Source: recovered/web/assets/536004.a83dbed8d40db3b2.js
 * UTF-16 property offsets: 4633..4905
 * Raw property SHA-256: c088008513fbf6a8ccdf75e3c447a9cd9ff36e42f8432a57c54a47fd2f83dda0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, t, e) {
  var n = e(210140),
    o = e(339626),
    a = e(250594),
    i = e(583178),
    p = e(77958),
    f = i("IE_PROTO"),
    u = Object,
    y = u.prototype;
  r.exports = p
    ? u.getPrototypeOf
    : function (r) {
        var t = a(r);
        if (n(t, f)) return t[f];
        var e = t.constructor;
        return o(e) && t instanceof e ? e.prototype : t instanceof u ? y : null;
      };
}
