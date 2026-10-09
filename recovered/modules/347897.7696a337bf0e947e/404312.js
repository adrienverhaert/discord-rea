/* Recovered shipped factory. Module 404312.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 653806..654026
 * Raw property SHA-256: f44a5c89b2e89bb28ba11eb18bc652b363c85391d0510863ccbc8df83a30d0e1
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  var t = String.prototype.replace,
    r = /%20/g,
    n = "RFC3986";
  e.exports = {
    default: n,
    formatters: {
      RFC1738: function (e) {
        return t.call(e, r, "+");
      },
      RFC3986: function (e) {
        return String(e);
      },
    },
    RFC1738: "RFC1738",
    RFC3986: n,
  };
}
