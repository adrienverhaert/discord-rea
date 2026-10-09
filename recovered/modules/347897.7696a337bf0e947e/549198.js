/* Recovered shipped factory. Module 549198.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 462019..462226
 * Raw property SHA-256: c9e0c161c73bceb242b521371c42006ca213c9700725b0e735c1c3f2c2e01fbe
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  e.exports = function (e, t) {
    if ((" " + t.className + " ").indexOf(" combokeys ") > -1) return !1;
    var r = t.tagName.toLowerCase();
    return "input" === r || "select" === r || "textarea" === r || t.isContentEditable;
  };
}
