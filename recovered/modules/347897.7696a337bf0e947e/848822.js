/* Recovered shipped factory. Module 848822.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 424248..424456
 * Raw property SHA-256: dc2fd0d9825d8fa5755d5ca9e3fe84b097dbfde38ae0d982cc6b2735069cab89
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "use strict";
  var t = {
    current: function (e, t) {
      if (!e.setNativeProps) return !1;
      e.setNativeProps(t);
    },
    transformStyles: function (e) {
      return e;
    },
    inject: function (e, r) {
      ((t.current = e), (t.transformStyles = r));
    },
  };
  e.exports = t;
}
