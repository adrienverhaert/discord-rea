/* Recovered shipped factory. Module 707040.
 * Source: recovered/web/assets/933399.5793fe5eebec71ea.js
 * UTF-16 property offsets: 3137..3852
 * Raw property SHA-256: b11e85a274eb9e036842b872e835c31ccd9488fa12e5e9dd7231ba14add7a79a
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  e.exports = function e(t, r) {
    if (t === r) return !0;
    if (t && r && "object" == typeof t && "object" == typeof r) {
      if (t.constructor !== r.constructor) return !1;
      if (Array.isArray(t)) {
        if ((n = t.length) != r.length) return !1;
        for (i = n; 0 != i--;) if (!e(t[i], r[i])) return !1;
        return !0;
      }
      if (t.constructor === RegExp) return t.source === r.source && t.flags === r.flags;
      if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === r.valueOf();
      if (t.toString !== Object.prototype.toString) return t.toString() === r.toString();
      if ((n = (o = Object.keys(t)).length) !== Object.keys(r).length) return !1;
      for (i = n; 0 != i--;) if (!Object.prototype.hasOwnProperty.call(r, o[i])) return !1;
      for (i = n; 0 != i--;) {
        var n,
          i,
          o,
          a = o[i];
        if (!e(t[a], r[a])) return !1;
      }
      return !0;
    }
    return t != t && r != r;
  };
}
