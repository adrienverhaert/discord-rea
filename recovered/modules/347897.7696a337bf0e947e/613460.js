/* Recovered shipped factory. Module 613460.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 461453..461604
 * Raw property SHA-256: 877a0953fea2be119b5f298b2082ad8bb600145a7008c2ac2ab6d8d99a0c3bcf
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  e.exports = function (e, t, r) {
    return (
      r || (r = this.getReverseMap()[e] ? "keydown" : "keypress"),
      "keypress" === r && t.length && (r = "keydown"),
      r
    );
  };
}
