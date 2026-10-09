/* Recovered shipped factory. Module 14665.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1016545..1016994
 * Raw property SHA-256: b082f10195d05bac670b6ff6d8e87d89144f5a851a64f472d3822c92d9bb1f7b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(741623),
    i = r(353841),
    o = {
      __proto__: null,
      "[[Configurable]]": !0,
      "[[Enumerable]]": !0,
      "[[Get]]": !0,
      "[[Set]]": !0,
      "[[Value]]": !0,
      "[[Writable]]": !0,
    };
  e.exports = function (e) {
    if (!e || "object" != typeof e) return !1;
    for (var t in e) if (i(e, t) && !o[t]) return !1;
    var r = i(e, "[[Value]]") || i(e, "[[Writable]]"),
      a = i(e, "[[Get]]") || i(e, "[[Set]]");
    if (r && a) throw new n("Property Descriptors may not be both accessor and data descriptors");
    return !0;
  };
}
