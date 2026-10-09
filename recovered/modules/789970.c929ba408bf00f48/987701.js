/* Recovered shipped factory. Module 987701.
 * Source: recovered/web/assets/789970.c929ba408bf00f48.js
 * UTF-16 property offsets: 168205..168674
 * Raw property SHA-256: c835b7225df7ba7f74766de7c69c55ad58010d7a4764da29bb5ca9c280c1cf46
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  function i(e) {
    return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
  }
  r.d(t, { A: () => n });
  let n = function e(t, r) {
    if (t === r) return !0;
    if (null == t || null == r) return !1;
    if (Array.isArray(t))
      return (
        Array.isArray(r) &&
        t.length === r.length &&
        t.every(function (t, i) {
          return e(t, r[i]);
        })
      );
    if ("object" == typeof t || "object" == typeof r) {
      var n = i(t),
        o = i(r);
      return n !== t || o !== r
        ? e(n, o)
        : Object.keys(Object.assign({}, t, r)).every(function (i) {
            return e(t[i], r[i]);
          });
    }
    return !1;
  };
}
