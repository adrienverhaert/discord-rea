/* Recovered shipped factory. Module 295394.
 * Source: recovered/web/assets/347897.7696a337bf0e947e.js
 * UTF-16 property offsets: 467580..467980
 * Raw property SHA-256: edd548df69a3b213de64e15876afe65eebe137485061423ef543d5daebad81f7
 * Wrapper export added for inspection; webpack imports are unresolved.
 */
export default function (e, t) {
  function r(e) {
    return "[object Arguments]" == Object.prototype.toString.call(e);
  }
  function n(e) {
    return (
      (e &&
        "object" == typeof e &&
        "number" == typeof e.length &&
        Object.prototype.hasOwnProperty.call(e, "callee") &&
        !Object.prototype.propertyIsEnumerable.call(e, "callee")) ||
      !1
    );
  }
  (((t = e.exports =
    "[object Arguments]" ==
    (function () {
      return Object.prototype.toString.call(arguments);
    })()
      ? r
      : n).supported = r),
    (t.unsupported = n));
}
