/* Recovered shipped factory. Module 850833.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 1015643..1016020
 * Raw property SHA-256: 7aa0237183fc97835f8b8958fe7ed2d95006c3ae8157b7f7a04323cbbf295695
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  e.exports = function (e) {
    if (void 0 === e) return e;
    var t = {};
    return (
      "[[Value]]" in e && (t.value = e["[[Value]]"]),
      "[[Writable]]" in e && (t.writable = !!e["[[Writable]]"]),
      "[[Get]]" in e && (t.get = e["[[Get]]"]),
      "[[Set]]" in e && (t.set = e["[[Set]]"]),
      "[[Enumerable]]" in e && (t.enumerable = !!e["[[Enumerable]]"]),
      "[[Configurable]]" in e && (t.configurable = !!e["[[Configurable]]"]),
      t
    );
  };
}
