/* Recovered shipped factory. Module 780594.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 462520..462796
 * Raw property SHA-256: de3ce9e84affb460589878875686f54b1b924deb4fa9fe03b801084ee51829da
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t, r) {
  "use strict";
  e.exports = function (e) {
    var t, n;
    if (((t = r(883134)), (n = r(391986)), "keypress" === e.type)) {
      var i = String.fromCharCode(e.which);
      return (e.shiftKey || (i = i.toLowerCase()), i);
    }
    return t[e.which]
      ? t[e.which]
      : n[e.which]
        ? n[e.which]
        : String.fromCharCode(e.which).toLowerCase();
  };
}
