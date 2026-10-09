/* Recovered shipped factory. Module 714790.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 152197..152576
 * Raw property SHA-256: 54ee7684c5b3bb140fcfc1b973483327508caf41cf84fe62261127e79b195d65
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(72408),
    o = n(154355);
  e.exports = function (e, t, n, a) {
    var i = n.length,
      u = i,
      l = !a;
    if (null == e) return !u;
    for (e = Object(e); i--;) {
      var s = n[i];
      if (l && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
    }
    for (; ++i < u;) {
      var c = (s = n[i])[0],
        f = e[c],
        d = s[1];
      if (l && s[2]) {
        if (void 0 === f && !(c in e)) return !1;
      } else {
        var h = new r();
        if (a) var p = a(f, d, c, e, t, h);
        if (!(void 0 === p ? o(d, f, 3, a, h) : p)) return !1;
      }
    }
    return !0;
  };
}
