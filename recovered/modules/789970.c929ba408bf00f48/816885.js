/* Recovered shipped factory. Module 816885.
 * Source: recovered/web/assets/789970.c929ba408bf00f48.js
 * UTF-16 property offsets: 7621..8076
 * Raw property SHA-256: 39a6961b8496b3ebd67dc0e541f2b2abd315d6d5796aae432330ce3f4072cf9e
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  function i(e, t, r, i) {
    var n = r ? r.call(i, e, t) : void 0;
    if (void 0 !== n) return !!n;
    if (e === t) return !0;
    if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
    var o = Object.keys(e),
      s = Object.keys(t);
    if (o.length !== s.length) return !1;
    for (var a = Object.prototype.hasOwnProperty.bind(t), u = 0; u < o.length; u++) {
      var c = o[u];
      if (!a(c)) return !1;
      var d = e[c],
        l = t[c];
      if (!1 === (n = r ? r.call(i, d, l, c) : void 0) || (void 0 === n && d !== l)) return !1;
    }
    return !0;
  }
  r.d(t, { b: () => i });
}
