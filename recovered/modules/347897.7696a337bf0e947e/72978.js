/* Recovered shipped factory. Module 72978.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 826695..827212
 * Raw property SHA-256: ffe7a043d38a4d0ab1b1bf188dafc01f78047ec18efc74d6dd4a21603b9c96e0
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t) {
  "use strict";
  (Object.defineProperty(t, "__esModule", { value: !0 }),
    (t.stringSimilarity = void 0),
    (t.stringSimilarity = function (e, t, r, n) {
      if (
        (void 0 === r && (r = 2),
        void 0 === n && (n = !1),
        n || ((e = e.toLowerCase()), (t = t.toLowerCase())),
        e.length < r || t.length < r)
      )
        return 0;
      for (var i = new Map(), o = 0; o < e.length - (r - 1); o++) {
        var a = e.substr(o, r);
        i.set(a, i.has(a) ? i.get(a) + 1 : 1);
      }
      for (var s = 0, l = 0; l < t.length - (r - 1); l++) {
        var u = t.substr(l, r),
          c = i.has(u) ? i.get(u) : 0;
        c > 0 && (i.set(u, c - 1), s++);
      }
      return (2 * s) / (e.length + t.length - (r - 1) * 2);
    }),
    (t.default = t.stringSimilarity));
}
