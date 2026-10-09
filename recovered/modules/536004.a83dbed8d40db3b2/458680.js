/* Recovered shipped factory. Module 458680.
 * Source: recovered/web/assets/536004.a83dbed8d40db3b2.js
 * UTF-16 property offsets: 4906..5214
 * Raw property SHA-256: c266279fdff546ae5f42ce24b5ea013e16d5de71b42806c25eeef4273f6ee191
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (r, t, e) {
  var n = e(19167),
    o = e(598349),
    a = e(321727),
    i = e(828027);
  r.exports =
    Object.setPrototypeOf ||
    ("__proto__" in {}
      ? (function () {
          var r,
            t = !1,
            e = {};
          try {
            ((r = n(Object.prototype, "__proto__", "set"))(e, []), (t = e instanceof Array));
          } catch (r) {}
          return function (e, n) {
            return (a(e), i(n), o(e) && (t ? r(e, n) : (e.__proto__ = n)), e);
          };
        })()
      : void 0);
}
