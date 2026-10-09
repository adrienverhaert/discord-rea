/* Recovered shipped factory. Module 155392.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 411889..412086
 * Raw property SHA-256: cb7812464f01deb4ec5da149768486690bcbba61b517fc8b25203adb377382af
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  function t() {
    this._cache = [];
  }
  ((t.prototype.add = function (e) {
    -1 === this._cache.indexOf(e) && this._cache.push(e);
  }),
    (t.prototype.forEach = function (e) {
      this._cache.forEach(e);
    }),
    (e.exports = t));
}
