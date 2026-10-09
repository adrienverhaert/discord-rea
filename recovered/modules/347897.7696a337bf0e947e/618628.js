/* Recovered shipped factory. Module 618628.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 505283..505602
 * Raw property SHA-256: 35b1b51ee77203184a84fed6248bcf6b4511911fc947b990f3c99a197c244976
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e) {
  "function" == typeof Object.create
    ? (e.exports = function (e, t) {
        t &&
          ((e.super_ = t),
          (e.prototype = Object.create(t.prototype, {
            constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
          })));
      })
    : (e.exports = function (e, t) {
        if (t) {
          e.super_ = t;
          var r = function () {};
          ((r.prototype = t.prototype), (e.prototype = new r()), (e.prototype.constructor = e));
        }
      });
}
