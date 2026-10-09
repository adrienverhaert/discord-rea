/* Recovered shipped factory. Module 556436.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 464225..464492
 * Raw property SHA-256: 99e8ba10c2b290c555b7d9a67b8f97a29b32cebaa274bf7e92b566ce45e6a3b6
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  e.exports = function (e) {
    var t = {},
      r = e.stopCallback;
    return (
      (e.stopCallback = function (e, n, i, o) {
        return !t[i] && !t[o] && r(e, n, i);
      }),
      (e.bindGlobal = function (e, r, n) {
        if ((this.bind(e, r, n), e instanceof Array)) {
          for (var i = 0; i < e.length; i++) t[e[i]] = !0;
          return;
        }
        t[e] = !0;
      }),
      e
    );
  };
}
