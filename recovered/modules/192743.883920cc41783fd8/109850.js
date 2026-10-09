/* Recovered shipped factory. Module 109850.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 167001..167547
 * Raw property SHA-256: 6ddcb5321182e51195325f983cdbb3036a65bb54f58e532f122ca65a576a34d2
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  var r = n(79011),
    o = n(629638),
    a = n(327073),
    i = n(735700),
    u = n(528674),
    l = n(484847),
    s = n(273590),
    c = "[object Map]",
    f = "[object Promise]",
    d = "[object Set]",
    h = "[object WeakMap]",
    p = "[object DataView]",
    y = s(r),
    m = s(o),
    v = s(a),
    g = s(i),
    b = s(u),
    w = l;
  (((r && w(new r(new ArrayBuffer(1))) != p) ||
    (o && w(new o()) != c) ||
    (a && w(a.resolve()) != f) ||
    (i && w(new i()) != d) ||
    (u && w(new u()) != h)) &&
    (w = function (e) {
      var t = l(e),
        n = "[object Object]" == t ? e.constructor : void 0,
        r = n ? s(n) : "";
      if (r)
        switch (r) {
          case y:
            return p;
          case m:
            return c;
          case v:
            return f;
          case g:
            return d;
          case b:
            return h;
        }
      return t;
    }),
    (e.exports = w));
}
