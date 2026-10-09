/* Recovered shipped factory. Module 798493.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1014988..1015470
 * Raw property SHA-256: e3c785271e7547b03d4992ca07cc46b37adec4be833323246808eef2d58fca4b
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  var n = r(473560),
    i = r(969001),
    o = n.hasArrayLengthDefineBug(),
    a = o && r(677480),
    s = r(906046)("Object.prototype.propertyIsEnumerable");
  e.exports = function (e, t, r, n, l, u) {
    if (!i) {
      if (
        !e(u) ||
        !u["[[Configurable]]"] ||
        !u["[[Writable]]"] ||
        (l in n && s(n, l) !== !!u["[[Enumerable]]"])
      )
        return !1;
      var c = u["[[Value]]"];
      return ((n[l] = c), t(n[l], c));
    }
    return o && "length" === l && "[[Value]]" in u && a(n) && n.length !== u["[[Value]]"]
      ? ((n.length = u["[[Value]]"]), n.length === u["[[Value]]"])
      : (i(n, l, r(u)), !0);
  };
}
