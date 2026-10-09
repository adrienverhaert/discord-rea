/* Recovered shipped factory. Module 948055.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 826533..826694
 * Raw property SHA-256: 0a6d07f82368f1989256527741e339c62930880a89148ba0b6f86de6bb0a2b95
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  e.exports = function (e) {
    return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
      return "%" + e.charCodeAt(0).toString(16).toUpperCase();
    });
  };
}
