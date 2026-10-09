/* Recovered shipped factory. Module 938796.
 * Source: recovered/web/assets/192743.883920cc41783fd8.js
 * UTF-16 property offsets: 640120..640628
 * Raw property SHA-256: 714e902dc2003d96c1aa05a611182d5e5ae9e3f68cab5ceae20f59235c15e5ff
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, n) {
  "use strict";
  var r = n(860511),
    o = n(257943),
    a = n(485155),
    i = n(693510),
    u = n(503628),
    l = r.RegExp,
    s = l.prototype;
  o &&
    u(function () {
      var e = !0;
      try {
        l(".", "d");
      } catch (t) {
        e = !1;
      }
      var t = {},
        n = "",
        r = e ? "dgimsy" : "gimsy",
        o = function (e, r) {
          Object.defineProperty(t, e, {
            get: function () {
              return ((n += r), !0);
            },
          });
        },
        a = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
      for (var i in (e && (a.hasIndices = "d"), a)) o(i, a[i]);
      return Object.getOwnPropertyDescriptor(s, "flags").get.call(t) !== r || n !== r;
    }) &&
    a(s, "flags", { configurable: !0, get: i });
}
