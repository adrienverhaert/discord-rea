/* Recovered shipped factory. Module 639562.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 461843..462018
 * Raw property SHA-256: 6854492a4d9cf50868437ca0fc608de5edc00255da804beb028fb3c4c7d92daf
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  e.exports = function (e) {
    e = e || {};
    var t,
      r = !1;
    for (t in this.sequenceLevels) {
      if (e[t]) {
        r = !0;
        continue;
      }
      this.sequenceLevels[t] = 0;
    }
    r || (this.nextExpectedAction = !1);
  };
}
