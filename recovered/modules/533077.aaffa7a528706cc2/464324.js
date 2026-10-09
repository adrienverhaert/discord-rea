/* Recovered shipped factory. Module 464324.
 * Source: recovered/web/assets/533077.aaffa7a528706cc2.js
 * UTF-16 property offsets: 359..667
 * Raw property SHA-256: 03b65088ac82e5d7ea33f8227b045af22f24706e33f63ddb72cf83738aa9872c
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, t, e) {
  var n = e(581390),
    o = e(273761),
    i = e(503199),
    u = function (r) {
      return function (t, e, u) {
        var a,
          c = n(t),
          f = i(c);
        if (0 === f) return !r && -1;
        var s = o(u, f);
        if (r && e != e) {
          for (; f > s;) if ((a = c[s++]) != a) return !0;
        } else for (; f > s; s++) if ((r || s in c) && c[s] === e) return r || s || 0;
        return !r && -1;
      };
    };
  r.exports = { includes: u(!0), indexOf: u(!1) };
}
